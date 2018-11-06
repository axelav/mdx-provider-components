'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('./components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createComponent = function createComponent(Component, defaultProps) {
  var C = function C(props) {
    return _react2.default.createElement(Component, props);
  };
  C.defaultProps = defaultProps;
  return C;
};

var createHeading = function createHeading(Component) {
  return function (props) {
    if (!props.id) {
      return _react2.default.createElement(Component, props);
    }

    return _react2.default.createElement(Component, props, _react2.default.createElement(_components.Link, {
      href: '#' + props.id
    }, props.children));
  };
};

var createScope = function createScope() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var commonComponents = {
    h1: createHeading(_components.Heading),
    h2: createHeading(_components.Subheading),
    h3: createHeading(_components.Title),
    h4: createHeading(_components.Subtitle),
    // h5: createHeading(Heading),
    // h6: createHeading(Heading),
    p: _components.Text,
    a: _components.Link,
    img: _components.Image,
    blockquote: _components.Blockquote,
    pre: _components.Pre,
    code: _components.Code,
    inlineCode: _components.Code,
    ul: _components.List,
    li: _components.Item,
    table: _components.Table
  };

  var tags = Object.keys(commonComponents);

  return tags.reduce(function (scope, tag) {
    var Component = commonComponents[tag];

    scope[tag] = createComponent(Component, props);
    return scope;
  }, {});
};

exports.default = createScope;