// Search.js

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Search = () => {
    return(
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '30vh'}}>
          <TextField
            style = {{width: 500}}
            placeholder="Reachout To"
            label="Search Tags" />
          <Button variant="contained" color="primary">Search</Button>
        </div>
    )
}
export default Search;