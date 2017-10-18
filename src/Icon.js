'use strict';

import React, { Component, PropTypes } from 'react';
import CSSModule from 'react-css-modules';
import classNames from 'classnames';
import styles from './style/index.less';

class Icon extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,  //图片类型
    onClick: PropTypes.func,
    inline: PropTypes.bool,
    className: PropTypes.string
  }

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const { type, className = '', inline } = this.props;
    const classString = classNames({
      container: true,
      [`icon-inline`]: !!inline,
      [`icon-${type}`]: true
    });

    return <i styleName={classString} onClick={this.props.onClick} className={className} />;
  }
}

export default CSSModule(Icon, styles, {
  allowMultiple: true
});
