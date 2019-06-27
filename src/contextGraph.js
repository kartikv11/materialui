import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';

class ContextGraph extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const elements = [
       { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
       { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
       { data: { id: 'three', label: 'Node 3' }, position: { x: 200, y: 50 } },
       { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } },
       { data: { source: 'two', target: 'three', label: 'Edge from Node12to Node3' } }
    ];

    return <CytoscapeComponent 
      
      elements={elements} 
      pan={ { x: 100, y: 200 } } 
      style={ { width: '500px', height: '300px' } } 
      zoom={1.2} 
    />;
  }
}

export default ContextGraph;
