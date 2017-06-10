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
    global.isValidProperty = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var pattern = /^--\S+$/;

  /**
   * Checks that a property name matches the
   * custom properties --* syntax format.
   *
   * Valid examples:
   * --foo
   * --foo-bar
   * --foo$_bar%^&123
   *
   * Invalid examples:
   * foo
   * -foo
   * --
   * --foo bar
   *
   * @param {string} property - The property name to validate
   *
   * @return {bool} true if the property name is valid
   */
  var isValidProperty = function isValidProperty(property) {
    return pattern.test(property);
  };

  exports.default = isValidProperty;
});