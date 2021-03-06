'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = require('material-ui/src/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormatItalic = function FormatItalic(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z' })
  );
};

FormatItalic = (0, _pure2.default)(FormatItalic);
FormatItalic.muiName = 'SvgIcon';

exports.default = FormatItalic;