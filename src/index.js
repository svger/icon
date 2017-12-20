import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style/index.less';

class Icon extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,        //样式前缀
    type: PropTypes.string.isRequired,  //icon类型
    onClick: PropTypes.func,
    color: PropTypes.oneOf(['blue', 'white']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    className: PropTypes.string,        //外部传入类
  }

  static defaultProps = {
    prefixCls: 'cefc-icon',
    className: '',
    color: 'blue',
    size: 'md',
    onClick: () => {}
  }

  render() {
    const { type, className, color, size, prefixCls } = this.props;
    const classString = classnames({
      'iconfont': true,
      [`${prefixCls}-${type}`]: true,
      [`${prefixCls}-${color}`]: true,
      [`${prefixCls}-${size}`]: true
    }, className);

    return <i onClick={this.props.onClick} className={classString} />
  }
}

export default Icon;
