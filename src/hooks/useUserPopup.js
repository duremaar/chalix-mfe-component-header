/**
 * useUserPopup Hook
 * 
 * Custom hook for managing user popup state and API interactions.
 * Handles fetching user data, managing open/close state, and logout functionality.
 */

import { useState, useCallback, useEffect } from 'react';
import { getAuthenticatedAPIClient } from '@edx/frontend-platform/auth';

/**
 * Hook to manage user popup functionality
 * 
 * @param {Object} options - Configuration options
 * @param {string} options.baseApiUrl - Base URL for API calls (default: '/api/user/v1')
 * @param {string} options.logoutUrl - URL to redirect to on logout (default: '/logout')
 * @returns {Object} User popup state and handlers
 */
const useUserPopup = (options = {}) => {
  const {
    baseApiUrl = '/api/user/v1',
    logoutUrl = '/logout',
  } = options;

  // State management
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch user data from API
  const fetchUserData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const client = getAuthenticatedAPIClient();
      const response = await client.get(`${baseApiUrl}/user_popup/`);

      if (response.status === 200) {
        setUserData(response.data);
      }
    } catch (err) {
      console.error('Error fetching user popup data:', err);
      setError(err.message || 'Failed to load user data');
    } finally {
      setIsLoading(false);
    }
  }, [baseApiUrl]);

  // Fetch user data when popup opens
  useEffect(() => {
    if (isOpen && !userData) {
      fetchUserData();
    }
  }, [isOpen, userData, fetchUserData]);

  // Toggle popup open/closed
  const togglePopup = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  // Close popup
  const closePopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Handle menu item click
  const handleMenuItemClick = useCallback((item) => {
    // Can be used for tracking or other actions
    console.log('Menu item clicked:', item.id);
  }, []);

  // Handle logout
  const handleLogout = useCallback(async () => {
    try {
      const client = getAuthenticatedAPIClient();
      // Call logout endpoint if available
      try {
        await client.post(`${baseApiUrl}/accounts/deactivate_logout/`);
      } catch (err) {
        // Endpoint may not exist, continue with redirect
        console.warn('Logout endpoint not found:', err);
      }

      // Redirect to logout URL
      window.location.href = logoutUrl;
    } catch (err) {
      console.error('Error during logout:', err);
      // Still redirect on error
      window.location.href = logoutUrl;
    }
  }, [baseApiUrl, logoutUrl]);

  // Refresh user data
  const refreshUserData = useCallback(() => {
    setUserData(null);
    fetchUserData();
  }, [fetchUserData]);

  return {
    // State
    isOpen,
    userData,
    isLoading,
    error,

    // Actions
    togglePopup,
    closePopup,
    openPopup: () => setIsOpen(true),
    handleMenuItemClick,
    handleLogout,
    refreshUserData,

    // Computed
    isAuthenticated: !!userData,
  };
};

export default useUserPopup;
