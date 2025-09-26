import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Admin password - in production, this should be in environment variables
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'j05vi1';

// Simple rate limiting for login attempts
const loginAttempts = new Map<string, { count: number; lastAttempt: number }>();
const MAX_ATTEMPTS = 5;
const LOCKOUT_TIME = 15 * 60 * 1000; // 15 minutes

// Generate a simple token
function generateToken(password: string): string {
  return crypto
    .createHash('sha256')
    .update(password + Date.now().toString())
    .digest('hex');
}

// Check rate limiting
function checkRateLimit(ip: string): { allowed: boolean; remainingAttempts?: number } {
  const now = Date.now();
  const attempt = loginAttempts.get(ip);

  if (!attempt) {
    return { allowed: true };
  }

  // Reset if lockout time has passed
  if (now - attempt.lastAttempt > LOCKOUT_TIME) {
    loginAttempts.delete(ip);
    return { allowed: true };
  }

  // Check if too many attempts
  if (attempt.count >= MAX_ATTEMPTS) {
    return { allowed: false };
  }

  return { 
    allowed: true, 
    remainingAttempts: MAX_ATTEMPTS - attempt.count 
  };
}

// Record login attempt
function recordAttempt(ip: string, success: boolean) {
  const now = Date.now();
  const attempt = loginAttempts.get(ip) || { count: 0, lastAttempt: now };

  if (success) {
    // Clear attempts on successful login
    loginAttempts.delete(ip);
  } else {
    // Increment failed attempts
    attempt.count += 1;
    attempt.lastAttempt = now;
    loginAttempts.set(ip, attempt);
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';

    // Check rate limiting
    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many failed attempts. Please try again later.',
          lockoutTime: LOCKOUT_TIME / 1000 / 60 // in minutes
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { password } = body;

    if (!password || typeof password !== 'string') {
      recordAttempt(ip, false);
      return NextResponse.json(
        {
          success: false,
          error: 'Password is required',
          remainingAttempts: rateLimit.remainingAttempts ? rateLimit.remainingAttempts - 1 : MAX_ATTEMPTS - 1
        },
        { status: 400 }
      );
    }

    // Check password
    if (password === ADMIN_PASSWORD) {
      recordAttempt(ip, true);
      
      // Generate a simple session token
      const token = generateToken(password);
      
      return NextResponse.json(
        {
          success: true,
          message: 'Authentication successful',
          token,
          expiresIn: 24 * 60 * 60 * 1000 // 24 hours
        },
        { status: 200 }
      );
    } else {
      recordAttempt(ip, false);
      
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid password',
          remainingAttempts: rateLimit.remainingAttempts ? rateLimit.remainingAttempts - 1 : MAX_ATTEMPTS - 1
        },
        { status: 401 }
      );
    }

  } catch (error) {
    console.error('Authentication error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      success: false,
      error: 'Method not allowed'
    },
    { status: 405 }
  );
}
