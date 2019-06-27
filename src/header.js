import React from 'react';
import { Wave, Random } from 'react-animated-text';

const exampleStyle = {
  display: 'inline-block',
  width: '80%',
  textAlign: 'center',
  fontSize: '3rem',
  color: '#3f51b5'
}

const codeDivStyle = {
  backgroundColor: '#eee',
  marginTop: '2em',
  overflow: 'scroll',
  fontSize: '1rem',
};

const codeStyle = {
  textAlign: 'left'
};

const buttonStyle = {
  cursor: 'pointer',
  backgroundColor: '#69c',
  border: 'none',
  color: 'white',
  appearance: 'none',
  boxShadow: 'none',
  borderRadius: 0,
  fontSize: '1.0rem',
  padding: '0.2em 2em',
};

export class WaveHeader extends React.Component {
	render() {
    return (
	  <div style={exampleStyle}>
	    <Wave text="JPMC Reachout" effect="stretch" effectChange={2.0} />

	  </div>
	  )
  }	
}

export default WaveHeader;