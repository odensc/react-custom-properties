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
    global.getRoot = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * An abstraction around the document object to
   * help mocking in tests.
   *
   * @return {object} - the root document element
   */
  var getRoot = function getRoot() {
    return document.documentElement;
  };

  exports.default = getRoot;
});