'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('./style/index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon(props, context) {
    _classCallCheck(this, Icon);

    var _this = _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props, context));

    _this.state = {};
    return _this;
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          type = _props.type,
          _props$className = _props.className,
          className = _props$className === undefined ? '' : _props$className,
          inline = _props.inline;

      var classString = (0, _classnames2.default)((_classNames = {
        container: true
      }, _defineProperty(_classNames, 'icon-inline', !!inline), _defineProperty(_classNames, 'icon-' + type, true), _classNames));

      return _react2.default.createElement('i', { styleName: classString, onClick: this.props.onClick, className: className });
    }
  }]);

  return Icon;
}(_react.Component);

Icon.propTypes = {
  type: _react.PropTypes.string.isRequired, //图片类型
  onClick: _react.PropTypes.func,
  inline: _react.PropTypes.bool,
  className: _react.PropTypes.string
};
exports.default = (0, _reactCssModules2.default)(Icon, _index2.default, {
  allowMultiple: true
});