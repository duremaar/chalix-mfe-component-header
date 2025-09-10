// CommonJS entry point for Chalix Header Component
const React = require('react');

module.exports = {
  default: function ChalixHeaderDefault() { 
    return React.createElement('div', {}, 'Chalix Header Loading...'); 
  },
  ChalixHeader: function ChalixHeader(props) {
    
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
