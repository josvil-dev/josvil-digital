
'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Mail, Calendar, User, MessageCircle, Loader2, 
  RefreshCw, AlertCircle, CheckCircle, Eye, EyeOff,
  Lock, Shield, LogOut
} from 'lucide-react';

// Contact data interface
interface ContactData {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Login component
function LoginForm({ onLogin, isDarkMode }: { onLogin: (password: string) => Promise<boolean>; isDarkMode: boolean }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        const success = await onLogin(password);
        if (!success) {
          setError('Authentication failed. Please try again.');
        }
      } else {
        setError(data.error || 'Authentication failed');
        if (data.remainingAttempts !== undefined) {
          setError(`${data.error}. ${data.remainingAttempts} attempts remaining.`);
        }
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const themeClasses = {
    container: isDarkMode ? "min-h-screen bg-slate-900 flex items-center justify-center" : "min-h-screen bg-gray-50 flex items-center justify-center",
    card: isDarkMode ? "bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-white/10 backdrop-blur-xl rounded-2xl p-8 w-full max-w-md" : "bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 backdrop-blur-xl rounded-2xl p-8 w-full max-w-md shadow-xl",
    heading: isDarkMode ? "text-2xl font-bold text-white mb-6 text-center" : "text-2xl font-bold text-gray-900 mb-6 text-center",
    input: isDarkMode ? "w-full pl-4 pr-12 py-3 rounded-xl border bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-indigo-400 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300" : "w-full pl-4 pr-12 py-3 rounded-xl border bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300",
    button: isDarkMode ? "w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_10px_25px_rgba(99,102,241,0.3)] disabled:opacity-50 disabled:cursor-not-allowed" : "w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_10px_25px_rgba(99,102,241,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
  };

  return (
    <div className={themeClasses.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={themeClasses.card}
      >
        <div className="text-center mb-6">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
            isDarkMode ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-100 text-indigo-600'
          }`}>
            <Shield className="w-8 h-8" />
          </div>
          <h1 className={themeClasses.heading}>Admin Access</h1>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Enter password to access admin panel
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="password" className={`block text-sm font-semibold mb-2 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Password
            </label>
            <div className="relative">
              <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={themeClasses.input}
                placeholder="Enter admin password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                  isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                } transition-colors duration-200`}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-4 p-3 rounded-lg flex items-center gap-2 ${
                isDarkMode
                  ? 'bg-red-500/20 border border-red-500/30 text-red-300'
                  : 'bg-red-50 border border-red-200 text-red-700'
              }`}
            >
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm">{error}</span>
            </motion.div>
          )}

          <button
            type="submit"
            disabled={isLoading || !password}
            className={themeClasses.button}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Authenticating...
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <Lock className="w-5 h-5" />
                Access Admin Panel
              </div>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            Default password: j05vi1
          </p>
          <p className={`text-xs ${isDarkMode ? 'text-gray-600' : 'text-gray-400'} mt-2`}>
            Protected by rate limiting • Session expires in 24h
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function AdminContactsPage() {
  const { isDarkMode } = useTheme();
  const [contacts, setContacts] = useState<ContactData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedContact, setSelectedContact] = useState<ContactData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authPassword, setAuthPassword] = useState('');

  // Check authentication status on component mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('admin_auth');
    if (savedAuth) {
      try {
        const { token, timestamp, password } = JSON.parse(savedAuth);
        // Check if authentication is still valid (24 hours)
        const isValid = Date.now() - timestamp < 24 * 60 * 60 * 1000;
        if (isValid && token && password === 'j05vi1') {
          setIsAuthenticated(true);
          setAuthPassword(password);
        } else {
          localStorage.removeItem('admin_auth');
        }
      } catch (err) {
        localStorage.removeItem('admin_auth');
      }
    }
  }, []);

  // Handle login
  const handleLogin = async (password: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        setIsAuthenticated(true);
        setAuthPassword(password);
        // Save authentication to localStorage with token
        localStorage.setItem('admin_auth', JSON.stringify({
          password,
          token: data.token,
          timestamp: Date.now()
        }));
        return true;
      }
      return false;
    } catch (err) {
      console.error('Login error:', err);
      return false;
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setAuthPassword('');
    localStorage.removeItem('admin_auth');
  };

  // Fetch contacts from API
  const fetchContacts = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact');
      const data = await response.json();
      
      if (data.success) {
        setContacts(data.contacts);
      } else {
        setError(data.error || 'Failed to fetch contacts');
      }
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  // Load contacts when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchContacts();
    }
  }, [isAuthenticated]);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Theme-aware classes
  const themeClasses = {
    container: isDarkMode ? "min-h-screen bg-slate-900" : "min-h-screen bg-gray-50",
    section: isDarkMode ? "relative py-20 bg-slate-900" : "relative py-20 bg-gray-50",
    heading: isDarkMode ? "text-3xl font-bold text-white mb-8" : "text-3xl font-bold text-gray-900 mb-8",
    card: isDarkMode ? "bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-white/10 backdrop-blur-xl rounded-2xl p-6" : "bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 backdrop-blur-xl rounded-2xl p-6 shadow-lg",
    button: isDarkMode ? "px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors duration-300" : "px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors duration-300"
  };

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} isDarkMode={isDarkMode} />;
  }

  return (
    <div className={themeClasses.container}>
      <div className={themeClasses.section}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Header */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="mb-8"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-between mb-6">
              <h1 className={themeClasses.heading}>
                Contact Submissions
              </h1>
              <div className="flex items-center gap-4">
                <button
                  onClick={fetchContacts}
                  disabled={isLoading}
                  className={`${themeClasses.button} flex items-center gap-2`}
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
                <button
                  onClick={handleLogout}
                  className={`px-4 py-2 ${
                    isDarkMode 
                      ? 'bg-red-600 hover:bg-red-500 text-white' 
                      : 'bg-red-600 hover:bg-red-500 text-white'
                  } rounded-lg transition-colors duration-300 flex items-center gap-2`}
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp} className={themeClasses.card}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className={`text-2xl font-bold ${
                    isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                  } mb-1`}>
                    {contacts.length}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Total Contacts
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold ${
                    isDarkMode ? 'text-green-300' : 'text-green-600'
                  } mb-1`}>
                    {contacts.filter(c => new Date(c.timestamp) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    This Week
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold ${
                    isDarkMode ? 'text-purple-300' : 'text-purple-600'
                  } mb-1`}>
                    {contacts.filter(c => new Date(c.timestamp) > new Date(Date.now() - 24 * 60 * 60 * 1000)).length}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Today
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Loading State */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center py-12"
            >
              <Loader2 className={`w-8 h-8 animate-spin ${
                isDarkMode ? 'text-indigo-400' : 'text-indigo-600'
              }`} />
              <span className={`ml-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Loading contacts...
              </span>
            </motion.div>
          )}

          {/* Error State */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl flex items-center gap-3 mb-6 ${
                isDarkMode
                  ? 'bg-red-500/20 border border-red-500/30 text-red-300'
                  : 'bg-red-50 border border-red-200 text-red-700'
              }`}
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p>{error}</p>
            </motion.div>
          )}

          {/* Contacts List */}
          {!isLoading && !error && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="space-y-6"
            >
              {contacts.length === 0 ? (
                <motion.div
                  variants={fadeInUp}
                  className={`${themeClasses.card} text-center py-12`}
                >
                  <MessageCircle className={`w-16 h-16 mx-auto mb-4 ${
                    isDarkMode ? 'text-gray-500' : 'text-gray-400'
                  }`} />
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    No contacts yet
                  </h3>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                    Contact submissions will appear here when visitors send messages.
                  </p>
                </motion.div>
              ) : (
                contacts.map((contact, index) => (
                  <motion.div
                    key={contact.id}
                    variants={fadeInUp}
                    className={`${themeClasses.card} hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${
                          isDarkMode 
                            ? 'bg-indigo-500/20 text-indigo-300' 
                            : 'bg-indigo-100 text-indigo-600'
                        }`}>
                          <User className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className={`text-lg font-semibold ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {contact.name}
                          </h3>
                          <p className={`${isDarkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>
                            {contact.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className={`w-4 h-4 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`} />
                        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                          {formatDate(contact.timestamp)}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className={`font-semibold mb-2 ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        Subject:
                      </h4>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {contact.subject}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className={`font-semibold mb-2 ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        Message:
                      </h4>
                      <div className={`p-4 rounded-xl ${
                        isDarkMode 
                          ? 'bg-white/5 border border-white/10' 
                          : 'bg-gray-50 border border-gray-200'
                      }`}>
                        <p className={`leading-relaxed ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {contact.message}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={`mailto:${contact.email}?subject=Re: ${contact.subject}`}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
                          isDarkMode
                            ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                            : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                        }`}
                      >
                        <Mail className="w-4 h-4" />
                        Reply
                      </a>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
