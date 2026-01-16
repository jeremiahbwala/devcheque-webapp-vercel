/**
 * API Configuration
 * 
 * This file centralizes all API-related configuration.
 * It reads from environment variables and provides
 * a clean interface for the rest of the app.
 */

// Get the API URL from environment variables
const API_URL = import.meta.env.VITE_API_URL || 'https://devchequebackend-production.up.railway.app';

// Get the environment (development, production, etc.)
const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT || 'development';

// Check if we're in development mode
const isDevelopment = ENVIRONMENT === 'development';

// Check if we're in production mode
const isProduction = ENVIRONMENT === 'production';

/**
 * API Endpoints
 * Define all your API endpoints here
 */
const API_ENDPOINTS = {
  // CSRF Token
  csrf: null,
  
  // Contact Form
  form: `${API_URL}/api/`,
  
  // Add more endpoints as your app grows
  // Example:
  // users: `${API_URL}/api/users/`,
  // projects: `${API_URL}/api/projects/`,
};

/**
 * API Configuration Options
 */
const API_CONFIG = {
  // Default headers for all requests
  headers: {
    'Content-Type': 'application/json',
  },
  
  // Default fetch options
  defaultOptions: {
    mode: 'cors',
  },
  
  // Timeout for requests (in milliseconds)
  timeout: 30000, // 30 seconds
};

/**
 * Helper function to build headers with CSRF token
 * @param {string} csrfToken - The CSRF token
 * @returns {Object} Headers object
 */
export const buildHeaders = (csrfToken = null) => {
  const headers = { ...API_CONFIG.headers };
  
  return headers;
};

/**
 * Helper function to make API requests with timeout
 * @param {string} url - The URL to fetch
 * @param {Object} options - Fetch options
 * @param {number} timeout - Timeout in milliseconds
 * @returns {Promise} Fetch promise with timeout
 */


/**
 * Log API calls in development
 * @param {string} endpoint - The endpoint being called
 * @param {Object} options - Request options
 */
export const logApiCall = (endpoint, options = {}) => {
  if (isDevelopment) {
    console.log(`🌐 API Call: ${endpoint}`, {
      method: options.method || 'GET',
      headers: options.headers,
      body: options.body ? JSON.parse(options.body) : null,
    });
  }
};

// Export everything
export {
  API_URL,
  API_ENDPOINTS,
  API_CONFIG,
  ENVIRONMENT,
  isDevelopment,
  isProduction,
};

// Default export
export default {
  API_URL,
  API_ENDPOINTS,
  API_CONFIG,
  ENVIRONMENT,
  isDevelopment,
  isProduction,
  buildHeaders,
  logApiCall,
};