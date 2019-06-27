// Navbar.js

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <Toolbar >
                    <b>JPMC Reachout</b>
                </Toolbar>
            </div>
        </AppBar>
        </div>
    )
}
export default NavBar;