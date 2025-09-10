// CommonJS entry point for Chalix Header Component
// This is a temporary stub for webpack compatibility

module.exports = {
  default: function ChalixHeaderDefault() { 
    return require('react').createElement('div', {}, 'Chalix Header Loading...'); 
  },
  ChalixHeader: function ChalixHeader(props) {
    const React = require('react');
    
    return React.createElement('header', { 
      className: 'chalix-header',
      style: { 
        backgroundColor: '#ffffff', 
        padding: '10px 20px', 
        borderBottom: '1px solid #dee2e6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, [
      React.createElement('div', { key: 'logo', className: 'header-logo' }, 'Chalix'),
      React.createElement('nav', { key: 'nav', className: 'header-nav' }, props?.children || 'Navigation')
    ]);
  },
  messages: {},
  EVENT_NAMES: {}
};
