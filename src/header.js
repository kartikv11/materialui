// header

import React, {Component} from 'react';
import Typist from 'react-typist';

export default class MyHeader extends Component {

  render() {
    return (
      <Typist loop={true} lastSentenceEffect={false} >
			  <span> JPMC </span>
			  	<Typist.Backspace count={8} delay={5} />
			  <span> Reachout </span>
			</Typist>
    );
  }
}