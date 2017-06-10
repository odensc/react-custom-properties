(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './is-valid-property', './remove-style-property', './set-style-property', './get-root'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./is-valid-property'), require('./remove-style-property'), require('./set-style-property'), require('./get-root'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.isValidProperty, global.removeStyleProperty, global.setStyleProperty, global.getRoot);
    global.index = mod.exports;
  }
})(this, function (exports, _isValidProperty, _removeStyleProperty, _setStyleProperty, _getRoot) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setStyleProperty = exports.removeStyleProperty = exports.isValidProperty = exports.getRoot = undefined;

  var _isValidProperty2 = _interopRequireDefault(_isValidProperty);

  var _removeStyleProperty2 = _interopRequireDefault(_removeStyleProperty);

  var _setStyleProperty2 = _interopRequireDefault(_setStyleProperty);

  var _getRoot2 = _interopRequireDefault(_getRoot);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.getRoot = _getRoot2.default;
  exports.isValidProperty = _isValidProperty2.default;
  exports.removeStyleProperty = _removeStyleProperty2.default;
  exports.setStyleProperty = _setStyleProperty2.default;
});