import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs-extra';
import path from 'path';

// Define the contact form data interface
interface ContactFormData {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  ip?: string;
  userAgent?: string;
}

// Path to the contacts database file
const CONTACTS_FILE = path.join(process.cwd(), 'data', 'contacts.json');

// Ensure the data directory and file exist
async function ensureDataFile() {
  try {
    await fs.ensureDir(path.dirname(CONTACTS_FILE));
    if (!(await fs.pathExists(CONTACTS_FILE))) {
      await fs.writeJson(CONTACTS_FILE, []);
    }
  } catch (error) {
    console.error('Error ensuring data file:', error);
    throw new Error('Database initialization failed');
  }
}

// Read contacts from the JSON file
async function readContacts(): Promise<ContactFormData[]> {
  try {
    await ensureDataFile();
    return await fs.readJson(CONTACTS_FILE);
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
}

// Write contacts to the JSON file
async function writeContacts(contacts: ContactFormData[]): Promise<void> {
  try {
    await ensureDataFile();
    await fs.writeJson(CONTACTS_FILE, contacts, { spaces: 2 });
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw new Error('Database write failed');
  }
}

// Generate a unique ID
function generateId(): string {
  return `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// Validate contact form data
function validateContactData(data: { name?: unknown; email?: unknown; subject?: unknown; message?: unknown }): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Check required fields
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!data.email || typeof data.email !== 'string' || !isValidEmail(data.email)) {
    errors.push('Please provide a valid email address');
  }

  if (!data.subject || typeof data.subject !== 'string' || data.subject.trim().length < 5) {
    errors.push('Subject must be at least 5 characters long');
  }

  if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  // Check for excessively long inputs to prevent abuse
  if (typeof data.name === 'string' && data.name.length > 100) {
    errors.push('Name is too long (maximum 100 characters)');
  }

  if (typeof data.email === 'string' && data.email.length > 255) {
    errors.push('Email is too long (maximum 255 characters)');
  }

  if (typeof data.subject === 'string' && data.subject.length > 200) {
    errors.push('Subject is too long (maximum 200 characters)');
  }

  if (typeof data.message === 'string' && data.message.length > 2000) {
    errors.push('Message is too long (maximum 2000 characters)');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

// Rate limiting - simple in-memory store (in production, use Redis or similar)
const rateLimitStore = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // Max 5 submissions per 15 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requests = rateLimitStore.get(ip) || [];
  
  // Remove old requests outside the window
  const recentRequests = requests.filter(time => now - time < RATE_LIMIT_WINDOW);
  
  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  // Add current request
  recentRequests.push(now);
  rateLimitStore.set(ip, recentRequests);
  
  return true;
}

// POST handler - Save contact form submission
export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many requests. Please wait before submitting again.' 
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate the data
    const validation = validateContactData(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed', 
          details: validation.errors 
        },
        { status: 400 }
      );
    }

    // Sanitize the input data
    const sanitizedData: ContactFormData = {
      id: generateId(),
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      subject: sanitizeInput(body.subject),
      message: sanitizeInput(body.message),
      timestamp: body.timestamp || new Date().toISOString(),
      ip: ip,
      userAgent: request.headers.get('user-agent') || 'unknown'
    };

    // Read existing contacts
    const contacts = await readContacts();

    // Add new contact
    contacts.push(sanitizedData);

    // Write back to file
    await writeContacts(contacts);

    // Log successful submission (remove in production or use proper logging)
    console.log(`New contact submission from ${sanitizedData.email} at ${sanitizedData.timestamp}`);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully!',
        id: sanitizedData.id
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

// GET handler - Retrieve contacts (for admin use - should be protected in production)
export async function GET(request: NextRequest) {
  try {
    // In production, add authentication/authorization here
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || '50');
    const skip = parseInt(url.searchParams.get('skip') || '0');

    const contacts = await readContacts();
    
    // Sort by timestamp (newest first) and apply pagination
    const sortedContacts = contacts
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(skip, skip + limit);

    // Remove sensitive data for response
    const publicContacts = sortedContacts.map(contact => ({
      id: contact.id,
      name: contact.name,
      email: contact.email,
      subject: contact.subject,
      message: contact.message,
      timestamp: contact.timestamp
    }));

    return NextResponse.json(
      { 
        success: true, 
        contacts: publicContacts,
        total: contacts.length,
        showing: publicContacts.length
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error fetching contacts:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch contacts' 
      },
      { status: 500 }
    );
  }
}
