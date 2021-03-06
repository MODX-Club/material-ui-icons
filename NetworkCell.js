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

var NetworkCell = function NetworkCell(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { fillOpacity: '.3', d: 'M2 22h20V2z' }),
    _react2.default.createElement('path', { d: 'M17 7L2 22h15z' })
  );
};

NetworkCell = (0, _pure2.default)(NetworkCell);
NetworkCell.muiName = 'SvgIcon';

exports.default = NetworkCell;