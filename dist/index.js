'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = exports.Item = exports.OrderedList = exports.UnorderedList = exports.Code = exports.Pre = exports.Blockquote = exports.Image = exports.Link = exports.Text = exports.Subtitle = exports.Title = exports.Subheading = exports.Heading = exports.default = undefined;

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
    ul: _components.UnorderedList,
    ol: _components.OrderedList,
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
exports.Heading = _components.Heading;
exports.Subheading = _components.Subheading;
exports.Title = _components.Title;
exports.Subtitle = _components.Subtitle;
exports.Text = _components.Text;
exports.Link = _components.Link;
exports.Image = _components.Image;
exports.Blockquote = _components.Blockquote;
exports.Pre = _components.Pre;
exports.Code = _components.Code;
exports.UnorderedList = _components.UnorderedList;
exports.OrderedList = _components.OrderedList;
exports.Item = _components.Item;
exports.Table = _components.Table;