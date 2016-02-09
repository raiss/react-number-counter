import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class Counter extends Component {
  render() {
    return (
      <div>{this.props.number}</div>
    )
  }
}
