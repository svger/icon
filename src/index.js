import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style/index.less';

class Icon extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,        //样式前缀
    type: PropTypes.string.isRequired,  //icon类型
    onClick: PropTypes.func,
    color: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    className: PropTypes.string,        //外部传入类
  }

  static defaultProps = {
    prefixCls: 'cefc-icon',
    className: '',
    size: 'md',
    onClick: () => {}
  }

  render() {
    const { type, className, color, size, prefixCls } = this.props;
    const classString = classnames({
      'iconfont': true,
      'cefc-icon': true,
      [`${prefixCls}-${type}`]: true,
      [`${prefixCls}-${size}`]: true,
    }, className);

    const style = { color };

    return <i onClick={this.props.onClick} className={classString} style={style} />
  }
}

export default Icon;
