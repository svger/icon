'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./style/index.less');

var defaultPrefixCls = 'cefc-icon';

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon(props, context) {
    _classCallCheck(this, Icon);

    var _this = _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props, context));

    _this.handleClick = function () {
      _this.props.onClick && _this.props.onClick();
    };

    _this.state = {};
    return _this;
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _cns;

      var _props = this.props,
          type = _props.type,
          prefix = _props.prefix,
          className = _props.className,
          inline = _props.inline,
          style = _props.style;

      var classString = (0, _classnames2.default)((_cns = {}, _defineProperty(_cns, '' + prefix, true), _defineProperty(_cns, prefix + '-ds-inline', !!inline), _defineProperty(_cns, prefix + '-' + type, true), _cns), className);

      return _react2.default.createElement('i', { key: type, style: style, onClick: this.handleClick, className: classString, onKeyUp: function onKeyUp() {} });
    }
  }]);

  return Icon;
}(_react.Component);

Icon.propTypes = {
  prefix: _propTypes2.default.string,
  type: _propTypes2.default.string.isRequired, //图片类型
  onClick: _propTypes2.default.func,
  inline: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};
Icon.defaultProps = {
  prefix: defaultPrefixCls,
  className: ''
};
exports.default = Icon;