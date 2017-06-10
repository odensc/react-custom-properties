(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.removeStyleProperty = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * A helper utility to abstract directly removing style properties
   * from DOM elements. This is mainly to help with testing.
   *
   * @param {object} element - The DOM element to be styled
   * @param {string} property - The name of the property to set
   *
   * @return {void}
   */
  var removeStyleProperty = function removeStyleProperty(element, property) {
    element.style.removeProperty(property);
  };

  exports.default = removeStyleProperty;
});