import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';

class ContextGraph extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const elements = [
       { data: { id: 'CCEM Reg', label: 'CCEM Reg1' }, position: { x: 0, y: 0 } },
       { data: { id: 'CCEM Risk', label: 'CCEM Risk' }, position: { x: 100, y: 0 } },
       { data: { id: 'PM', label: 'PM' }, position: { x: 0, y: 100 } },
       { data: { id: 'DAC', label: 'DAC' }, position: { x: 100, y: 150 } },
       { data: { source: 'CCEM Risk', target: 'DAC', label: 'FX Feed' } },
       { data: { source: 'CCEM Reg', target: 'CCEM Risk', label: 'UxM Feed' } },
       { data: { source: 'CCEM Reg', target: 'PM', label: 'Reg Feed' } },
       { data: { source: 'CCEM Risk', target: 'PM', label: 'Risk, MTM, RADAR' } }
    ];


    return <CytoscapeComponent
      elements={elements}
      pan={ { x: 100, y: 200 } } 
      style={ { width: '700px', height: '600px' } } 
      zoom={1.2} 
      stylesheet={[ // the stylesheet for the graph
      {
        selector: 'node',
        style: {
          'background-color': '#666',
          'label': 'data(id)'
        }
      },

      {
        selector: 'edge',
        style: {
          'width': 3,
          'length': 100,
          'line-color': '#ccc',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'diamond',
          'label': 'data(label)'
        }
      }
    ]}
    />

  }
}

export default ContextGraph;
