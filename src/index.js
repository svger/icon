'use strict';

import React, { Component } from 'react';
import cns from 'classnames';
import PropTypes from 'prop-types';

require('./style/index.less');
const defaultPrefixCls = 'cefc-icon';

class Icon extends Component {
  static propTypes = {
    prefix: PropTypes.string,
    type: PropTypes.string.isRequired,  //图片类型
    onClick: PropTypes.func,
    inline: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
  }

  static defaultProps = {
    prefix: defaultPrefixCls,
    className: ''
  }

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  handleClick = () => {
    this.props.onClick && this.props.onClick();
  }

  render() {
    const { type, prefix, className, inline, style } = this.props;
    const classString = cns({
      [`${prefix}`]: true,
      [`${prefix}-ds-inline`]: !!inline,
      [`${prefix}-${type}`]: true
    }, className);

    return <i key={type} style={style} onClick={this.handleClick} className={classString} onKeyUp={() => {}} />
  }
}

export default Icon;
