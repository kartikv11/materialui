import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';

class ContextGraph extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    var elements=[];
    for(var i=0;i<this.props.nodes.length;i++){
         // push the component to elements!
        elements.push(
            { data: { id: this.props.nodes[i].id, label: this.props.nodes[i].label } }
          );
    }
    for(var i=0;i<this.props.edges.length;i++){
         // push the component to elements!
        elements.push(
            { data: { source: this.props.edges[i].from, target: this.props.edges[i].to, label: this.props.edges[i].info } }
          );
    }

    /*const elements = [
       { data: { id: 'CCEM Reg', label: 'CCEM Reg(My Team)' }, position: { x: 0, y: 0 } },
       { data: { id: 'CCEM Risk', label: 'CCEM Risk' }, position: { x: 100, y: 0 } },
       { data: { id: 'PM', label: 'PM' }, position: { x: 0, y: 100 } },
       { data: { id: 'DAC', label: 'DAC' }, position: { x: 100, y: 150 } },
       { data: { source: 'CCEM Risk', target: 'DAC', label: 'FX Feed' } },
       { data: { source: 'CCEM Reg', target: 'CCEM Risk', label: 'UxM Feed' } },
       { data: { source: 'CCEM Reg', target: 'PM', label: 'Reg Feed' } },
       { data: { source: 'CCEM Risk', target: 'PM', label: 'Risk, MTM, RADAR' } }
    ];*/


    return <CytoscapeComponent
      elements={elements}
      pan={ { x: 100, y: 200 } } 
      style={ { width: '700px', height: '600px' } } 
      zoom={1.2} 
      stylesheet={[ // the stylesheet for the graph
      {
        selector: 'node',
        style: {
          'background-color': '#c70011',
          'label': 'data(label)'
        }
      },

      {
        selector: 'edge',
        style: {
          'width': 3,
          'length': 100,
          'line-color': '#ccc',
          'target-arrow-color': '#000000',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier',
          'label': 'data(label)'
        }
      }
    ]}
    />

  }
}

export default ContextGraph;
