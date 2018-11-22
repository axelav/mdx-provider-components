'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = exports.Item = exports.OrderedList = exports.UnorderedList = exports.Code = exports.Pre = exports.Blockquote = exports.Image = exports.Link = exports.Text = exports.Subtitle = exports.Title = exports.Subheading = exports.Heading = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _journalize = require('journalize');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Heading = function Heading(_ref) {
  var children = _ref.children,
      smallMargin = _ref.smallMargin;

  var prefix = (0, _classnames2.default)('f3 mt0 lh-title', {
    mb2: smallMargin,
    mb4: !smallMargin
  });

  return _react2.default.createElement(
    'h1',
    { className: prefix },
    children
  );
};

Heading.defaultProps = { smallMargin: false };

var Subheading = function Subheading(_ref2) {
  var children = _ref2.children;
  return _react2.default.createElement(
    'h2',
    { className: 'mt0 mb4 lh-title f4' },
    children
  );
};
var Title = function Title(_ref3) {
  var children = _ref3.children;
  return _react2.default.createElement(
    'h3',
    { className: 'mt0 mb4 lh-title f5' },
    children
  );
};
var Subtitle = function Subtitle(_ref4) {
  var children = _ref4.children;
  return _react2.default.createElement(
    'h4',
    { className: 'mt0 mb4 lh-title f5 i normal gray' },
    children
  );
};
var Text = function Text(_ref5) {
  var children = _ref5.children;

  if (typeof children === 'string') {
    return _react2.default.createElement(
      'p',
      { className: 'lh-copy mt0 mb4 measure-wide-ns' },
      (0, _journalize.widont)(children)
    );
  }

  return _react2.default.createElement(
    'p',
    { className: 'lh-copy mt0 mb4 measure-wide-ns' },
    children
  );
};
var Link = function Link(_ref6) {
  var children = _ref6.children,
      href = _ref6.href;
  return _react2.default.createElement(
    'a',
    { className: 'blue hover-dark-blue link', href: href },
    children
  );
};
// TODO use components/Image here
var Image = function Image(_ref7) {
  var src = _ref7.src;
  return _react2.default.createElement('img', { className: 'db mw-100 mb4', src: src });
};
var Blockquote = function Blockquote(_ref8) {
  var children = _ref8.children;
  return _react2.default.createElement(
    'blockquote',
    { className: 'mt0 mh0 mb4 ph3 i bl b--light-gray' },
    children
  );
};
var Pre = function Pre(_ref9) {
  var children = _ref9.children;
  return _react2.default.createElement(
    'pre',
    { className: 'pre bg-near-white pa3 mb4' },
    children
  );
};
var Code = function Code(_ref10) {
  var children = _ref10.children;
  return _react2.default.createElement(
    'code',
    null,
    children
  );
};
var UnorderedList = function UnorderedList(_ref11) {
  var children = _ref11.children;
  return _react2.default.createElement(
    'ul',
    { className: 'mt0 mh0 mb4 pl4' },
    children
  );
};
var OrderedList = function OrderedList(_ref12) {
  var children = _ref12.children;
  return _react2.default.createElement(
    'ol',
    { className: 'mt0 mh0 mb4 pl4' },
    children
  );
};
var Item = function Item(_ref13) {
  var children = _ref13.children;
  return _react2.default.createElement(
    'li',
    { className: 'mt0 mb2 lh-copy' },
    children
  );
};
var Table = function Table(_ref14) {
  var children = _ref14.children;
  return _react2.default.createElement(
    'table',
    { className: 'collapse mb4 ba b--light-gray' },
    children
  );
};

exports.Heading = Heading;
exports.Subheading = Subheading;
exports.Title = Title;
exports.Subtitle = Subtitle;
exports.Text = Text;
exports.Link = Link;
exports.Image = Image;
exports.Blockquote = Blockquote;
exports.Pre = Pre;
exports.Code = Code;
exports.UnorderedList = UnorderedList;
exports.OrderedList = OrderedList;
exports.Item = Item;
exports.Table = Table;