(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '../utilities'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('../utilities'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.utilities);
    global.customProperties = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _utilities) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var CustomProperties = function (_Component) {
    _inherits(CustomProperties, _Component);

    function CustomProperties(props) {
      _classCallCheck(this, CustomProperties);

      var _this = _possibleConstructorReturn(this, (CustomProperties.__proto__ || Object.getPrototypeOf(CustomProperties)).call(this, props));

      _this.container = null;
      _this.containerRef = _this.containerRef.bind(_this);
      _this.getContainer = _this.getContainer.bind(_this);
      _this.handleNewProperties = _this.handleNewProperties.bind(_this);
      return _this;
    }

    _createClass(CustomProperties, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        var properties = this.props.properties;

        var keys = Object.keys(properties);

        keys.forEach(function (key) {
          (0, _utilities.setStyleProperty)(_this2.getContainer(), key, properties[key]);
        });
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var properties = this.props.properties;


        if (nextProps.properties !== properties) {
          this.handleNewProperties(nextProps.properties, properties);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var _this3 = this;

        var _props = this.props,
            global = _props.global,
            properties = _props.properties;


        if (!global) {
          return;
        }

        var keys = Object.keys(properties);

        keys.forEach(function (key) {
          (0, _utilities.removeStyleProperty)(_this3.getContainer(), key);
        });
      }
    }, {
      key: 'containerRef',
      value: function containerRef(element) {
        this.container = element;
      }
    }, {
      key: 'getContainer',
      value: function getContainer() {
        var global = this.props.global;


        return global ? (0, _utilities.getRoot)() : this.container;
      }
    }, {
      key: 'handleNewProperties',
      value: function handleNewProperties(next, previous) {
        var _this4 = this;

        var nextKeys = Object.keys(next);
        var previousKeys = Object.keys(previous);
        var removedKeys = previousKeys.filter(function (key) {
          return typeof next[key] === 'undefined';
        });

        nextKeys.filter(function (key) {
          return next[key] !== previous[key];
        }).forEach(function (key) {
          (0, _utilities.setStyleProperty)(_this4.getContainer(), key, next[key]);
        });

        removedKeys.forEach(function (key) {
          (0, _utilities.removeStyleProperty)(_this4.getContainer(), key);
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { ref: this.containerRef },
          this.props.children
        );
      }
    }]);

    return CustomProperties;
  }(_react.Component);

  CustomProperties.propTypes = {
    global: _propTypes2.default.bool,
    properties: _propTypes2.default.objectOf(function (value, key, componentName) {
      if (!(0, _utilities.isValidProperty)(key)) {
        return new Error(('\n<' + componentName + ' /> could not set the property "' + key + ': ' + value[key] + ';".\nCustom Property names must be a string starting with two dashes, for example "--theme-background".\n      ').trim());
      }
    })
  };

  CustomProperties.defaultProps = {
    global: false,
    properties: {}
  };

  exports.default = CustomProperties;
});