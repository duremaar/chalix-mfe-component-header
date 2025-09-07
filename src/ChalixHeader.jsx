import React, { useContext, useState, useRef, useEffect } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import { getConfig } from '@edx/frontend-platform';
import PropTypes from 'prop-types';

import './ChalixHeader.scss';

const ChalixHeader = ({ platformName, searchPlaceholder }) => {
  const { authenticatedUser, config } = useContext(AppContext);
  const { formatMessage } = useIntl();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const dropdownRef = useRef(null);
  const userAvatarRef = useRef(null);
  const notificationRef = useRef(null);
  const notificationButtonRef = useRef(null);

  // Get platform name from props, config, or fallback
  const displayPlatformName = platformName || 
    config?.PLATFORM_NAME || 
    config?.SITE_NAME || 
    'PHẦN MỀM HỌC TẬP THÔNG MINH DÀNH CHO CÔNG CHỨC, VIÊN CHỨC';
  
  // Get user display name with fallback
  const userDisplayName = authenticatedUser?.name || authenticatedUser?.username || 'User';

  // Search placeholder text
  const searchPlaceholderText = searchPlaceholder || 'Nhập từ khóa tìm kiếm';

  // Handle clicking outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
          userAvatarRef.current && !userAvatarRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target) &&
          notificationButtonRef.current && !notificationButtonRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Load notifications and unread count on mount
  useEffect(() => {
    loadNotifications();
    loadUnreadCount();
  }, []);

  // Load notifications from API
  const loadNotifications = async () => {
    try {
      const response = await fetch(`${config.LMS_BASE_URL}/api/chalix/user-menu/notifications/`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setNotifications(data.notifications);
          setUnreadCount(data.unread_count);
        }
      }
    } catch (error) {
      console.error('Failed to load notifications:', error);
    }
  };

  // Load unread count
  const loadUnreadCount = async () => {
    try {
      const response = await fetch(`${config.LMS_BASE_URL}/api/chalix/user-menu/notifications/unread-count/`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setUnreadCount(data.unread_count);
        }
      }
    } catch (error) {
      console.error('Failed to load unread count:', error);
    }
  };

  // Toggle notification dropdown
  const toggleNotificationDropdown = () => {
    setIsNotificationOpen(!isNotificationOpen);
    if (!isNotificationOpen) {
      loadNotifications();
    }
  };

  // Mark notification as read
  const markNotificationAsRead = async (notificationId) => {
    try {
      const response = await fetch(`${config.LMS_BASE_URL}/api/chalix/user-menu/notifications/${notificationId}/read/`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
      });

      if (response.ok) {
        // Update local state
        setNotifications(prevNotifications => 
          prevNotifications.map(notif => 
            notif.id === notificationId ? { ...notif, is_read: true } : notif
          )
        );
        setUnreadCount(prev => Math.max(0, prev - 1));
      }
    } catch (error) {
      console.error('Failed to mark notification as read:', error);
    }
  };

  // Mark all notifications as read
  const markAllNotificationsAsRead = async () => {
    try {
      const response = await fetch(`${config.LMS_BASE_URL}/api/chalix/user-menu/notifications/mark-all-read/`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
      });

      if (response.ok) {
        // Update local state
        setNotifications(prevNotifications => 
          prevNotifications.map(notif => ({ ...notif, is_read: true }))
        );
        setUnreadCount(0);
      }
    } catch (error) {
      console.error('Failed to mark all notifications as read:', error);
    }
  };

  // Handle notification click
  const handleNotificationClick = (notification) => {
    if (!notification.is_read) {
      markNotificationAsRead(notification.id);
    }
    if (notification.action_url) {
      window.location.href = notification.action_url;
    }
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Menu items configuration based on Figma design
  const menuItems = [
    {
      id: 'courses',
      label: 'Khóa học',
      icon: 'course',
      action: () => handleMenuAction('courses'),
    },
    {
      id: 'update-info',
      label: 'Cập nhật thông tin',
      icon: 'edit',
      action: () => handleMenuAction('update-info'),
    },
    {
      id: 'personalization',
      label: 'Cá nhân hóa',
      icon: 'person',
      action: () => handleMenuAction('personalization'),
    },
    {
      id: 'request-list',
      label: 'Danh sách yêu cầu',
      icon: 'list',
      action: () => handleMenuAction('request-list'),
    },
    {
      id: 'learning-results',
      label: 'Kết quả học tập',
      icon: 'results',
      action: () => handleMenuAction('learning-results'),
    },
    {
      id: 'personal-plan',
      label: 'Lập kế hoạch cá nhân',
      icon: 'plan',
      action: () => handleMenuAction('personal-plan'),
    },
    {
      id: 'teaching-registration',
      label: 'Đăng ký giảng dạy',
      icon: 'teach',
      action: () => handleMenuAction('teaching-registration'),
    },
    {
      id: 'help',
      label: 'Trợ giúp',
      icon: 'help',
      action: () => handleMenuAction('help'),
    },
    {
      id: 'logout',
      label: 'Đăng xuất',
      icon: 'logout',
      action: () => handleMenuAction('logout'),
    },
  ];

  // Handle menu item actions
  const handleMenuAction = async (action) => {
    setIsDropdownOpen(false);
    
    switch (action) {
      case 'courses':
        window.location.href = `${config.LMS_BASE_URL}/courses`;
        break;
      case 'update-info':
        window.location.href = `${config.ACCOUNT_PROFILE_URL}/u/${authenticatedUser?.username}`;
        break;
      case 'personalization':
        window.location.href = `${config.LMS_BASE_URL}/dashboard?tab=personalization`;
        break;
      case 'request-list':
        window.location.href = `${config.LMS_BASE_URL}/dashboard?tab=requests`;
        break;
      case 'learning-results':
        window.location.href = `${config.LMS_BASE_URL}/dashboard?tab=progress`;
        break;
      case 'personal-plan':
        window.location.href = `${config.LMS_BASE_URL}/dashboard?tab=learning-plan`;
        break;
      case 'teaching-registration':
        window.location.href = `${config.LMS_BASE_URL}/dashboard?tab=teaching`;
        break;
      case 'help':
        window.location.href = `${config.LMS_BASE_URL}/help`;
        break;
      case 'logout':
        try {
          // Call logout API endpoint
          const response = await fetch(`${config.LMS_BASE_URL}/api/chalix/user-menu/logout/`, {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
            },
          });
          
          if (response.ok) {
            // Redirect to login page
            window.location.href = `${config.LMS_BASE_URL}/login`;
          } else {
            throw new Error('Logout API call failed');
          }
        } catch (error) {
          console.error('Logout failed:', error);
          // Fallback: redirect to logout URL
          window.location.href = `${config.LMS_BASE_URL}/logout`;
        }
        break;
      default:
        console.log('Unknown action:', action);
    }
  };

  // Icons as inline SVGs
  const HomeIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  );

  const ListIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
    </svg>
  );

  const StudyIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
    </svg>
  );

  const ProfileIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  );

  const UserIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 3.5L9 7V9C9 10.1 9.9 11 11 11V22H13V11C14.1 11 15 10.1 15 9Z"/>
    </svg>
  );

  const PersonMenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  );

  const NotificationIcon = () => (
    <svg width="35" height="35" viewBox="0 0 24 24" fill="white">
      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
    </svg>
  );

  const SearchIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>
  );

  const handleNavigation = (path) => {
    // Handle navigation - can be customized based on routing system
    window.location.href = path;
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.querySelector('.search-input').value;
    if (searchTerm) {
      // Handle search - can be customized
      const searchUrl = `${config.LMS_BASE_URL}/courses?search=${encodeURIComponent(searchTerm)}`;
      window.location.href = searchUrl;
    }
  };

  return (
    <div className="chalix-header">
      {/* Top Blue Section */}
      <div className="chalix-header-top">
        <div className="chalix-header-container">
          <div className="chalix-header-title">
            <h1>{displayPlatformName}</h1>
          </div>
          <div className="chalix-header-user-section">
            <span className="user-name">{userDisplayName}</span>
            <div 
              className="user-avatar" 
              ref={userAvatarRef}
              onClick={toggleDropdown}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && toggleDropdown()}
            >
              {authenticatedUser?.avatar ? (
                <img 
                  src={authenticatedUser.avatar} 
                  alt={userDisplayName}
                  className="user-avatar-img"
                />
              ) : (
                <UserIcon />
              )}
            </div>
            <div 
              className="notification-icon"
              ref={notificationButtonRef}
              onClick={toggleNotificationDropdown}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && toggleNotificationDropdown()}
            >
              <NotificationIcon />
              {unreadCount > 0 && (
                <span className="notification-badge">{unreadCount > 99 ? '99+' : unreadCount}</span>
              )}
            </div>
            
            {/* User Account Dropdown Menu */}
            {isDropdownOpen && (
              <div className="user-dropdown-menu" ref={dropdownRef}>
                <div className="dropdown-header">
                  <div className="dropdown-user-info">
                    <PersonMenuIcon />
                    <span className="dropdown-user-name">{userDisplayName}</span>
                  </div>
                </div>
                <div className="dropdown-divider" />
                {menuItems.map((item, index) => (
                  <div key={item.id}>
                    <div 
                      className="dropdown-menu-item"
                      onClick={item.action}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && item.action()}
                    >
                      <span className="dropdown-item-label">{item.label}</span>
                    </div>
                    {index < menuItems.length - 1 && <div className="dropdown-divider" />}
                  </div>
                ))}
              </div>
            )}
            
            {/* Notification Dropdown */}
            {isNotificationOpen && (
              <div className="notification-dropdown" ref={notificationRef}>
                <div className="notification-header">
                  <h3 className="notification-title">THÔNG BÁO</h3>
                  {unreadCount > 0 && (
                    <button 
                      className="mark-all-read-btn"
                      onClick={markAllNotificationsAsRead}
                      type="button"
                    >
                      Đánh dấu tất cả đã đọc
                    </button>
                  )}
                </div>
                <div className="notification-divider" />
                
                <div className="notification-list">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`notification-item ${notification.is_read ? 'read' : 'unread'}`}
                        onClick={() => handleNotificationClick(notification)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && handleNotificationClick(notification)}
                      >
                        <div className="notification-content">
                          <div className="notification-message">
                            {notification.title}
                          </div>
                          <div className="notification-time">
                            {notification.time_since_created}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="no-notifications">
                      <p>Không có thông báo mới</p>
                    </div>
                  )}
                </div>
                
                <div className="notification-footer">
                  <button 
                    className="view-all-btn"
                    onClick={() => window.location.href = `${config.LMS_BASE_URL}/notifications`}
                    type="button"
                  >
                    Xem tất cả thông báo
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom White Section with Navigation */}
      <div className="chalix-header-bottom">
        <div className="chalix-header-container">
          <nav className="chalix-nav">
            <div 
              className="nav-item active"
              onClick={() => handleNavigation(`${config.LMS_BASE_URL}/dashboard`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleNavigation(`${config.LMS_BASE_URL}/dashboard`)}
            >
              <HomeIcon />
              <span>Trang chủ</span>
            </div>
            <div 
              className="nav-item"
              onClick={() => handleNavigation(`${config.LMS_BASE_URL}/courses`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleNavigation(`${config.LMS_BASE_URL}/courses`)}
            >
              <ListIcon />
              <span>Danh mục</span>
            </div>
            <div 
              className="nav-item"
              onClick={() => handleNavigation(`${config.LMS_BASE_URL}/dashboard`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleNavigation(`${config.LMS_BASE_URL}/dashboard`)}
            >
              <StudyIcon />
              <span>Học tập</span>
            </div>
            <div 
              className="nav-item"
              onClick={() => handleNavigation(`${config.ACCOUNT_PROFILE_URL}/u/${authenticatedUser?.username}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleNavigation(`${config.ACCOUNT_PROFILE_URL}/u/${authenticatedUser?.username}`)}
            >
              <ProfileIcon />
              <span>Cá nhân hóa</span>
            </div>
          </nav>

          {/* Search Bar */}
          <form className="chalix-search-bar" onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder={searchPlaceholderText}
              className="search-input"
              name="search"
            />
            <button type="submit" className="search-button">
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

ChalixHeader.propTypes = {
  platformName: PropTypes.string,
  searchPlaceholder: PropTypes.string,
};

ChalixHeader.defaultProps = {
  platformName: null,
  searchPlaceholder: null,
};

export default ChalixHeader;
