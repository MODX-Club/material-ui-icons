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

var SignalCellularConnectedNoInternet3Bar = function SignalCellularConnectedNoInternet3Bar(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { fillOpacity: '.3', d: 'M22 8V2L2 22h16V8z' }),
    _react2.default.createElement('path', { d: 'M17 22V7L2 22h15zm3-12v8h2v-8h-2zm0 12h2v-2h-2v2z' })
  );
};

SignalCellularConnectedNoInternet3Bar = (0, _pure2.default)(SignalCellularConnectedNoInternet3Bar);
SignalCellularConnectedNoInternet3Bar.muiName = 'SvgIcon';

exports.default = SignalCellularConnectedNoInternet3Bar;