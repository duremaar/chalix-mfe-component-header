function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; var r = _regenerator(), e = r.m(_regeneratorRuntime), t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor; function n(r) { var e = "function" == typeof r && r.constructor; return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name)); } var o = { "throw": 1, "return": 2, "break": 3, "continue": 3 }; function a(r) { var e, t; return function (n) { e || (e = { stop: function stop() { return t(n.a, 2); }, "catch": function _catch() { return n.v; }, abrupt: function abrupt(r, e) { return t(n.a, o[r], e); }, delegateYield: function delegateYield(r, o, a) { return e.resultName = o, t(n.d, _regeneratorValues(r), a); }, finish: function finish(r) { return t(n.f, r); } }, t = function t(r, _t, o) { n.p = e.prev, n.n = e.next; try { return r(_t, o); } finally { e.next = n.n; } }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n; try { return r.call(this, e); } finally { n.p = e.prev, n.n = e.next; } }; } return (_regeneratorRuntime = function _regeneratorRuntime() { return { wrap: function wrap(e, t, n, o) { return r.w(a(e), t, n, o && o.reverse()); }, isGeneratorFunction: n, mark: r.m, awrap: function awrap(r, e) { return new _OverloadYield(r, e); }, AsyncIterator: _regeneratorAsyncIterator, async: function async(r, e, t, o, u) { return (n(e) ? _regeneratorAsyncGen : _regeneratorAsync)(a(r), e, t, o, u); }, keys: _regeneratorKeys, values: _regeneratorValues }; })(); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regeneratorKeys(e) { var n = Object(e), r = []; for (var t in n) r.unshift(t); return function e() { for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e; return e.done = !0, e; }; }
function _regeneratorAsync(n, e, r, t, o) { var a = _regeneratorAsyncGen(n, e, r, t, o); return a.next().then(function (n) { return n.done ? n.value : a.next(); }); }
function _regeneratorAsyncGen(r, e, t, o, n) { return new _regeneratorAsyncIterator(_regenerator().w(r, e, t, o), n || Promise); }
function _regeneratorAsyncIterator(t, e) { function n(r, o, i, f) { try { var c = t[r](o), u = c.value; return u instanceof _OverloadYield ? e.resolve(u.v).then(function (t) { n("next", t, i, f); }, function (t) { n("throw", t, i, f); }) : e.resolve(u).then(function (t) { c.value = t, i(c); }, function (t) { return n("throw", t, i, f); }); } catch (t) { f(t); } } var r; this.next || (_regeneratorDefine2(_regeneratorAsyncIterator.prototype), _regeneratorDefine2(_regeneratorAsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () { return this; })), _regeneratorDefine2(this, "_invoke", function (t, o, i) { function f() { return new e(function (e, r) { n(t, i, e, r); }); } return r = r ? r.then(f, f) : f(); }, !0); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _OverloadYield(e, d) { this.v = e, this.k = d; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useContext, useState, useRef, useEffect } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import { getConfig } from '@edx/frontend-platform';
import PropTypes from 'prop-types';
import './ChalixHeader.scss';
var ChalixHeader = function ChalixHeader(_ref) {
  var platformName = _ref.platformName,
    searchPlaceholder = _ref.searchPlaceholder;
  var _useContext = useContext(AppContext),
    authenticatedUser = _useContext.authenticatedUser,
    config = _useContext.config;
  var _useIntl = useIntl(),
    formatMessage = _useIntl.formatMessage;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDropdownOpen = _useState2[0],
    setIsDropdownOpen = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isNotificationOpen = _useState4[0],
    setIsNotificationOpen = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    notifications = _useState6[0],
    setNotifications = _useState6[1];
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    unreadCount = _useState8[0],
    setUnreadCount = _useState8[1];
  var dropdownRef = useRef(null);
  var userAvatarRef = useRef(null);
  var notificationRef = useRef(null);
  var notificationButtonRef = useRef(null);

  // Get platform name from props, config, or fallback
  var displayPlatformName = platformName || (config === null || config === void 0 ? void 0 : config.PLATFORM_NAME) || (config === null || config === void 0 ? void 0 : config.SITE_NAME) || 'PHẦN MỀM HỌC TẬP THÔNG MINH DÀNH CHO CÔNG CHỨC, VIÊN CHỨC';

  // Get user display name with fallback
  var userDisplayName = (authenticatedUser === null || authenticatedUser === void 0 ? void 0 : authenticatedUser.name) || (authenticatedUser === null || authenticatedUser === void 0 ? void 0 : authenticatedUser.username) || 'User';

  // Search placeholder text
  var searchPlaceholderText = searchPlaceholder || 'Nhập từ khóa tìm kiếm';

  // Handle clicking outside the dropdown to close it
  useEffect(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && userAvatarRef.current && !userAvatarRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target) && notificationButtonRef.current && !notificationButtonRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Load notifications and unread count on mount
  useEffect(function () {
    loadNotifications();
    loadUnreadCount();
  }, []);

  // Load notifications from API
  var loadNotifications = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("".concat(config.LMS_BASE_URL, "/api/chalix/user-menu/notifications/"), {
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
              }
            });
          case 3:
            response = _context.sent;
            if (!response.ok) {
              _context.next = 9;
              break;
            }
            _context.next = 7;
            return response.json();
          case 7:
            data = _context.sent;
            if (data.success) {
              setNotifications(data.notifications);
              setUnreadCount(data.unread_count);
            }
          case 9:
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.error('Failed to load notifications:', _context.t0);
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 11]]);
    }));
    return function loadNotifications() {
      return _ref2.apply(this, arguments);
    };
  }();

  // Load unread count
  var loadUnreadCount = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response, data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fetch("".concat(config.LMS_BASE_URL, "/api/chalix/user-menu/notifications/unread-count/"), {
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
              }
            });
          case 3:
            response = _context2.sent;
            if (!response.ok) {
              _context2.next = 9;
              break;
            }
            _context2.next = 7;
            return response.json();
          case 7:
            data = _context2.sent;
            if (data.success) {
              setUnreadCount(data.unread_count);
            }
          case 9:
            _context2.next = 14;
            break;
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.error('Failed to load unread count:', _context2.t0);
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 11]]);
    }));
    return function loadUnreadCount() {
      return _ref3.apply(this, arguments);
    };
  }();

  // Toggle notification dropdown
  var toggleNotificationDropdown = function toggleNotificationDropdown() {
    setIsNotificationOpen(!isNotificationOpen);
    if (!isNotificationOpen) {
      loadNotifications();
    }
  };

  // Mark notification as read
  var markNotificationAsRead = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(notificationId) {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return fetch("".concat(config.LMS_BASE_URL, "/api/chalix/user-menu/notifications/").concat(notificationId, "/read/"), {
              method: 'POST',
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
              }
            });
          case 3:
            response = _context3.sent;
            if (response.ok) {
              // Update local state
              setNotifications(function (prevNotifications) {
                return prevNotifications.map(function (notif) {
                  return notif.id === notificationId ? _objectSpread(_objectSpread({}, notif), {}, {
                    is_read: true
                  }) : notif;
                });
              });
              setUnreadCount(function (prev) {
                return Math.max(0, prev - 1);
              });
            }
            _context3.next = 10;
            break;
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.error('Failed to mark notification as read:', _context3.t0);
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 7]]);
    }));
    return function markNotificationAsRead(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  // Mark all notifications as read
  var markAllNotificationsAsRead = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return fetch("".concat(config.LMS_BASE_URL, "/api/chalix/user-menu/notifications/mark-all-read/"), {
              method: 'POST',
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
              }
            });
          case 3:
            response = _context4.sent;
            if (response.ok) {
              // Update local state
              setNotifications(function (prevNotifications) {
                return prevNotifications.map(function (notif) {
                  return _objectSpread(_objectSpread({}, notif), {}, {
                    is_read: true
                  });
                });
              });
              setUnreadCount(0);
            }
            _context4.next = 10;
            break;
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.error('Failed to mark all notifications as read:', _context4.t0);
          case 10:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 7]]);
    }));
    return function markAllNotificationsAsRead() {
      return _ref5.apply(this, arguments);
    };
  }();

  // Handle notification click
  var handleNotificationClick = function handleNotificationClick(notification) {
    if (!notification.is_read) {
      markNotificationAsRead(notification.id);
    }
    if (notification.action_url) {
      window.location.href = notification.action_url;
    }
  };

  // Toggle dropdown visibility
  var toggleDropdown = function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Menu items configuration based on Figma design
  var menuItems = [{
    id: 'courses',
    label: 'Khóa học',
    icon: 'course',
    action: function action() {
      return handleMenuAction('courses');
    }
  }, {
    id: 'update-info',
    label: 'Cập nhật thông tin',
    icon: 'edit',
    action: function action() {
      return handleMenuAction('update-info');
    }
  }, {
    id: 'personalization',
    label: 'Cá nhân hóa',
    icon: 'person',
    action: function action() {
      return handleMenuAction('personalization');
    }
  }, {
    id: 'request-list',
    label: 'Danh sách yêu cầu',
    icon: 'list',
    action: function action() {
      return handleMenuAction('request-list');
    }
  }, {
    id: 'learning-results',
    label: 'Kết quả học tập',
    icon: 'results',
    action: function action() {
      return handleMenuAction('learning-results');
    }
  }, {
    id: 'personal-plan',
    label: 'Lập kế hoạch cá nhân',
    icon: 'plan',
    action: function action() {
      return handleMenuAction('personal-plan');
    }
  }, {
    id: 'teaching-registration',
    label: 'Đăng ký giảng dạy',
    icon: 'teach',
    action: function action() {
      return handleMenuAction('teaching-registration');
    }
  }, {
    id: 'help',
    label: 'Trợ giúp',
    icon: 'help',
    action: function action() {
      return handleMenuAction('help');
    }
  }, {
    id: 'logout',
    label: 'Đăng xuất',
    icon: 'logout',
    action: function action() {
      return handleMenuAction('logout');
    }
  }];

  // Handle menu item actions
  var handleMenuAction = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(action) {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            setIsDropdownOpen(false);
            _context5.t0 = action;
            _context5.next = _context5.t0 === 'courses' ? 4 : _context5.t0 === 'update-info' ? 6 : _context5.t0 === 'personalization' ? 8 : _context5.t0 === 'request-list' ? 10 : _context5.t0 === 'learning-results' ? 12 : _context5.t0 === 'personal-plan' ? 14 : _context5.t0 === 'teaching-registration' ? 16 : _context5.t0 === 'help' ? 18 : _context5.t0 === 'logout' ? 20 : 36;
            break;
          case 4:
            window.location.href = "".concat(config.LMS_BASE_URL, "/courses");
            return _context5.abrupt("break", 37);
          case 6:
            window.location.href = "".concat(config.ACCOUNT_PROFILE_URL, "/u/").concat(authenticatedUser === null || authenticatedUser === void 0 ? void 0 : authenticatedUser.username);
            return _context5.abrupt("break", 37);
          case 8:
            window.location.href = "".concat(config.LMS_BASE_URL, "/dashboard?tab=personalization");
            return _context5.abrupt("break", 37);
          case 10:
            window.location.href = "".concat(config.LMS_BASE_URL, "/dashboard?tab=requests");
            return _context5.abrupt("break", 37);
          case 12:
            window.location.href = "".concat(config.LMS_BASE_URL, "/dashboard?tab=progress");
            return _context5.abrupt("break", 37);
          case 14:
            window.location.href = "".concat(config.LMS_BASE_URL, "/dashboard?tab=learning-plan");
            return _context5.abrupt("break", 37);
          case 16:
            window.location.href = "".concat(config.LMS_BASE_URL, "/dashboard?tab=teaching");
            return _context5.abrupt("break", 37);
          case 18:
            window.location.href = "".concat(config.LMS_BASE_URL, "/help");
            return _context5.abrupt("break", 37);
          case 20:
            _context5.prev = 20;
            _context5.next = 23;
            return fetch("".concat(config.LMS_BASE_URL, "/api/chalix/user-menu/logout/"), {
              method: 'POST',
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
              }
            });
          case 23:
            response = _context5.sent;
            if (!response.ok) {
              _context5.next = 28;
              break;
            }
            // Redirect to login page
            window.location.href = "".concat(config.LMS_BASE_URL, "/login");
            _context5.next = 29;
            break;
          case 28:
            throw new Error('Logout API call failed');
          case 29:
            _context5.next = 35;
            break;
          case 31:
            _context5.prev = 31;
            _context5.t1 = _context5["catch"](20);
            console.error('Logout failed:', _context5.t1);
            // Fallback: redirect to logout URL
            window.location.href = "".concat(config.LMS_BASE_URL, "/logout");
          case 35:
            return _context5.abrupt("break", 37);
          case 36:
            console.log('Unknown action:', action);
          case 37:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[20, 31]]);
    }));
    return function handleMenuAction(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();

  // Icons as inline SVGs
  var HomeIcon = function HomeIcon() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "30",
      height: "30",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
    }));
  };
  var ListIcon = function ListIcon() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "30",
      height: "30",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
    }));
  };
  var StudyIcon = function StudyIcon() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "30",
      height: "30",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"
    }));
  };
  var ProfileIcon = function ProfileIcon() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "30",
      height: "30",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
    }));
  };
  var UserIcon = function UserIcon() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "30",
      height: "30",
      viewBox: "0 0 24 24",
      fill: "white"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 3.5L9 7V9C9 10.1 9.9 11 11 11V22H13V11C14.1 11 15 10.1 15 9Z"
    }));
  };
  var PersonMenuIcon = function PersonMenuIcon() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
    }));
  };
  var NotificationIcon = function NotificationIcon() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "35",
      height: "35",
      viewBox: "0 0 24 24",
      fill: "white"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
    }));
  };
  var SearchIcon = function SearchIcon() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
    }));
  };
  var handleNavigation = function handleNavigation(path) {
    // Handle navigation - can be customized based on routing system
    window.location.href = path;
  };
  var handleSearch = function handleSearch(event) {
    event.preventDefault();
    var searchTerm = event.target.querySelector('.search-input').value;
    if (searchTerm) {
      // Handle search - can be customized
      var searchUrl = "".concat(config.LMS_BASE_URL, "/courses?search=").concat(encodeURIComponent(searchTerm));
      window.location.href = searchUrl;
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "chalix-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chalix-header-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chalix-header-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chalix-header-title"
  }, /*#__PURE__*/React.createElement("h1", null, displayPlatformName)), /*#__PURE__*/React.createElement("div", {
    className: "chalix-header-user-section"
  }, /*#__PURE__*/React.createElement("span", {
    className: "user-name"
  }, userDisplayName), /*#__PURE__*/React.createElement("div", {
    className: "user-avatar",
    ref: userAvatarRef,
    onClick: toggleDropdown,
    role: "button",
    tabIndex: 0,
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Enter' && toggleDropdown();
    }
  }, authenticatedUser !== null && authenticatedUser !== void 0 && authenticatedUser.avatar ? /*#__PURE__*/React.createElement("img", {
    src: authenticatedUser.avatar,
    alt: userDisplayName,
    className: "user-avatar-img"
  }) : /*#__PURE__*/React.createElement(UserIcon, null)), /*#__PURE__*/React.createElement("div", {
    className: "notification-icon",
    ref: notificationButtonRef,
    onClick: toggleNotificationDropdown,
    role: "button",
    tabIndex: 0,
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Enter' && toggleNotificationDropdown();
    }
  }, /*#__PURE__*/React.createElement(NotificationIcon, null), unreadCount > 0 && /*#__PURE__*/React.createElement("span", {
    className: "notification-badge"
  }, unreadCount > 99 ? '99+' : unreadCount)), isDropdownOpen && /*#__PURE__*/React.createElement("div", {
    className: "user-dropdown-menu",
    ref: dropdownRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "dropdown-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dropdown-user-info"
  }, /*#__PURE__*/React.createElement(PersonMenuIcon, null), /*#__PURE__*/React.createElement("span", {
    className: "dropdown-user-name"
  }, userDisplayName))), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-divider"
  }), menuItems.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "dropdown-menu-item",
      onClick: item.action,
      role: "button",
      tabIndex: 0,
      onKeyDown: function onKeyDown(e) {
        return e.key === 'Enter' && item.action();
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "dropdown-item-label"
    }, item.label)), index < menuItems.length - 1 && /*#__PURE__*/React.createElement("div", {
      className: "dropdown-divider"
    }));
  })), isNotificationOpen && /*#__PURE__*/React.createElement("div", {
    className: "notification-dropdown",
    ref: notificationRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "notification-header"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "notification-title"
  }, "TH\xD4NG B\xC1O"), unreadCount > 0 && /*#__PURE__*/React.createElement("button", {
    className: "mark-all-read-btn",
    onClick: markAllNotificationsAsRead,
    type: "button"
  }, "\u0110\xE1nh d\u1EA5u t\u1EA5t c\u1EA3 \u0111\xE3 \u0111\u1ECDc")), /*#__PURE__*/React.createElement("div", {
    className: "notification-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "notification-list"
  }, notifications.length > 0 ? notifications.map(function (notification) {
    return /*#__PURE__*/React.createElement("div", {
      key: notification.id,
      className: "notification-item ".concat(notification.is_read ? 'read' : 'unread'),
      onClick: function onClick() {
        return handleNotificationClick(notification);
      },
      role: "button",
      tabIndex: 0,
      onKeyDown: function onKeyDown(e) {
        return e.key === 'Enter' && handleNotificationClick(notification);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "notification-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "notification-message"
    }, notification.title), /*#__PURE__*/React.createElement("div", {
      className: "notification-time"
    }, notification.time_since_created)));
  }) : /*#__PURE__*/React.createElement("div", {
    className: "no-notifications"
  }, /*#__PURE__*/React.createElement("p", null, "Kh\xF4ng c\xF3 th\xF4ng b\xE1o m\u1EDBi"))), /*#__PURE__*/React.createElement("div", {
    className: "notification-footer"
  }, /*#__PURE__*/React.createElement("button", {
    className: "view-all-btn",
    onClick: function onClick() {
      return window.location.href = "".concat(config.LMS_BASE_URL, "/notifications");
    },
    type: "button"
  }, "Xem t\u1EA5t c\u1EA3 th\xF4ng b\xE1o")))))), /*#__PURE__*/React.createElement("div", {
    className: "chalix-header-bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chalix-header-container"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "chalix-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-item active",
    onClick: function onClick() {
      return handleNavigation("".concat(config.LMS_BASE_URL, "/dashboard"));
    },
    role: "button",
    tabIndex: 0,
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Enter' && handleNavigation("".concat(config.LMS_BASE_URL, "/dashboard"));
    }
  }, /*#__PURE__*/React.createElement(HomeIcon, null), /*#__PURE__*/React.createElement("span", null, "Trang ch\u1EE7")), /*#__PURE__*/React.createElement("div", {
    className: "nav-item",
    onClick: function onClick() {
      return handleNavigation("".concat(config.LMS_BASE_URL, "/courses"));
    },
    role: "button",
    tabIndex: 0,
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Enter' && handleNavigation("".concat(config.LMS_BASE_URL, "/courses"));
    }
  }, /*#__PURE__*/React.createElement(ListIcon, null), /*#__PURE__*/React.createElement("span", null, "Danh m\u1EE5c")), /*#__PURE__*/React.createElement("div", {
    className: "nav-item",
    onClick: function onClick() {
      return handleNavigation("".concat(config.LMS_BASE_URL, "/dashboard"));
    },
    role: "button",
    tabIndex: 0,
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Enter' && handleNavigation("".concat(config.LMS_BASE_URL, "/dashboard"));
    }
  }, /*#__PURE__*/React.createElement(StudyIcon, null), /*#__PURE__*/React.createElement("span", null, "H\u1ECDc t\u1EADp")), /*#__PURE__*/React.createElement("div", {
    className: "nav-item",
    onClick: function onClick() {
      return handleNavigation("".concat(config.ACCOUNT_PROFILE_URL, "/u/").concat(authenticatedUser === null || authenticatedUser === void 0 ? void 0 : authenticatedUser.username));
    },
    role: "button",
    tabIndex: 0,
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Enter' && handleNavigation("".concat(config.ACCOUNT_PROFILE_URL, "/u/").concat(authenticatedUser === null || authenticatedUser === void 0 ? void 0 : authenticatedUser.username));
    }
  }, /*#__PURE__*/React.createElement(ProfileIcon, null), /*#__PURE__*/React.createElement("span", null, "C\xE1 nh\xE2n h\xF3a"))), /*#__PURE__*/React.createElement("form", {
    className: "chalix-search-bar",
    onSubmit: handleSearch
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: searchPlaceholderText,
    className: "search-input",
    name: "search"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "search-button"
  }, /*#__PURE__*/React.createElement(SearchIcon, null))))));
};
ChalixHeader.propTypes = {
  platformName: PropTypes.string,
  searchPlaceholder: PropTypes.string
};
ChalixHeader.defaultProps = {
  platformName: null,
  searchPlaceholder: null
};
export default ChalixHeader;
//# sourceMappingURL=ChalixHeader.js.map