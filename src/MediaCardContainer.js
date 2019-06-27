// MediaCardContainer to wrap all Containers
import React from 'react';
import MediaCard from './Card';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';

class MediaCardContainer extends React.Component {   
	constructor(props) {
    super(props);
  }

  render() {
  	var elements=[];
    for(var i=0;i<this.props.results.length;i++){
         // push the component to elements!
        elements.push(<MediaCard cardValues={ this.props.results[i] } style={{flex: 1}}/>);
    }
    /* the for loop above is essentially the same as
    elements = arr.map( item => <Card value={ item } /> );
    The result is an array of four Card components. */
    return (  
	  	<div>
				<Toolbar >
		    	<b>Firmwide Context</b>
	      </Toolbar>
	      <br/>
	      <Divider />
		      <div style={{display: 'flex', flexDirection: 'row'}}>
		        {elements}
	        </div>
	  	</div>
	  );	
	}
}

export default MediaCardContainer;