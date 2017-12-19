import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import "./style/index.less";

class Icon extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,  //icon类型
    onClick: PropTypes.func,
    color: PropTypes.oneOf(['blue', 'white']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
    color: 'blue',
    size: 'md'
  }

  handleClick = () => {
    this.props.onClick && this.props.onClick();
  }

  render() {
    const { type, className, color, size } = this.props;
    const classString = classnames({
      'iconfont': true,
      [`cefc-icon-${type}`]: true,
      [`cefc-icon-blue`]: color === 'blue',
      [`cefc-icon-white`]: color === 'white',
      [`cefc-icon-sm`]: size === 'sm',
      [`cefc-icon-md`]: size === 'md',
      [`cefc-icon-lg`]: size === 'lg',
    }, className);

    return <i onClick={this.handleClick} className={classString}/>
  }
}

export default Icon;
