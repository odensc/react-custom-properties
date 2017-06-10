(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._);
    global.setStyleProperty = mod.exports;
  }
})(this, function (exports, _) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /**
   * A helper utility to abstract directly setting style properties
   * on DOM elements. This is mainly to help with testing.
   *
   * @param {object} element - The DOM element to be styled
   * @param {string} property - The name of the property to set
   * @param {string} value - The value of the property
   *
   * @return {void}
   */
  var setStyleProperty = function setStyleProperty(element, property, value) {
    if ((0, _.isValidProperty)(property)) {
      element.style.setProperty(property, value);
    }
  };

  exports.default = setStyleProperty;
});