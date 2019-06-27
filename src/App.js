// App.js

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Navbar from './Navbar';
import MyHeader from './header';
import Search from './Search';
import Divider from '@material-ui/core/Divider';
import RedirectButton from './RedirectButton';
import ContextGraph from './contextGraph';
import WaveHeader from './header.js';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{textAlign: 'right'}}>
          <RedirectButton />
        </div>
        
        <Search />
      </div>
    );
  }
};

export default App;