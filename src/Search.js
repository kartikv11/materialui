// Search.js

import React from 'react';
import Button from '@material-ui/core/Button';
import MediaCardContainer from './MediaCardContainer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import ContextGraph from './contextGraph';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const SearchButton = (props) => {
  const {
    searchQuery,
    onChange,
    search
  } = props;

  return (
  			<div>
					  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '30vh'}}>
							          <TextField
							            style = {{width: 500}}
							            placeholder="Reachout To"
							            value={searchQuery}
							            onChange={onChange}
							            label="Search Tags" />
							          <Button variant="contained" color="primary" onClick={search}>Search</Button>
							          <br/><br/>
		        </div>
				</div>
		)
};

class Search extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      results: [],
      nodes: [],
      edges: []
    }

    this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearchQueryChange(e) {
    this.setState({searchQuery: e.target.value});
  }

  onSearch() {
  	axios.get(`http://192.168.1.126:5000/search/${this.state.searchQuery}`,{
  		method: 'GET',
      mode: 'no-cors',
  		headers: {
			  'Access-Control-Allow-Origin': '*',
			  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
			  "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Cache-Control",
			  'Content-Type': 'application/json',
			  "Access-Control-Allow-Credentials": true
			}
		}).then(res => {
        const results = res.data;
        const nodes = res.data;
        const edges = res.data;
        this.setState({ results: results.Global.teams });
        this.setState({ nodes: results.Personal.nodes });
        this.setState({ edges: results.Personal.edges });
      });
    /*Simulate AJAX call
    setTimeout(() => {
      this.setState({results: [
      		{
	  					'TeamName': 'Test Team 1',
	  					'DL': 'test1@gmail.com',
	  					'Description': 'Team Description 1',
	  					'tags': 'tag1, tag2, tag3'
	  			},
	  			{
	  					'TeamName': 'Test Team 2',
	  					'DL': 'test2@gmail.com',
	  					'Description': 'Team Description 2',
	  					'tags': 'tag4, tag2, tag5'
	  			},
	  			{
	  					'TeamName': 'Test Team 3',
	  					'DL': 'test3@gmail.com',
	  					'Description': 'Team Description 3',
	  					'tags': 'tag8, tag2, tag9'
	  			}
      	]})
    }, 1000)*/
  }

  render() {

    const {edges, nodes, results, searchQuery} = this.state;

    return(
    		<div>
    			<SearchButton
		        searchQuery={searchQuery}
		        onChange={this.onSearchQueryChange}
		        search={this.onSearch}
		      />
		      <MediaCardContainer results={results} />
		      <Toolbar >
            <b>Your Context</b>
	        </Toolbar>
	        <Divider />
	        <br/>
	        <ContextGraph nodes={nodes} edges={edges}/>
        </div>
    )
  }
}
export default Search;