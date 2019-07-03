import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import './Transition.css';

const Transition = () => (
  <CSSTransitionGroup
    transitionName="fade"
    transitionEnterTimeout={1000}
    transitionLeaveTimeout={1000}
  >
    <h1>Hello React</h1>
  </CSSTransitionGroup>
);

export default Transition;
