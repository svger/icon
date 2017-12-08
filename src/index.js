'use strict';

import React, { Component } from 'react';
import cns from 'classnames';
import PropTypes from 'prop-types';
import "./style/index.less";

class Icon extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,  //icon类型
    onClick: PropTypes.func,
    className: PropTypes.string,
  }

  static defaultProps = {
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
    const { type, className } = this.props;
    const classString = cns({
      'iconfont': true,
      [`${type}`]: true
    }, className);

    return <i onClick={this.handleClick} className={classString} />
  }
}

export default Icon;
