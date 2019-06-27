// App.js

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Navbar from './Navbar';
import MyHeader from './header';
import Search from './Search';
import MediaCard from './Card';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import RedirectButton from './RedirectButton';
import ContextGraph from './contextGraph';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{textAlign: 'right'}}>
          <RedirectButton />
        </div>
        <Search />
        
        <Toolbar >
            <b>Your Context</b>
        </Toolbar>
        <Divider />
        <br/>
        <ContextGraph />

        <br/>
        <Toolbar >
            <b>JPMC Context</b>
        </Toolbar>
        <br/>
        <Divider />
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <MediaCard style={{flex: 1}}/>
          <MediaCard style={{flex: 1}}/>
          <MediaCard style={{flex: 1}}/>
        </div>
      </div>
    );
  }
}

export default App;