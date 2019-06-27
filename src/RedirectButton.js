// Redirect Button to Team - details

import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/Bookmarks'

class RedirectButton extends React.Component {
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/teams' />
    }
  }
  render () {
    return (
       <div>
        {this.renderRedirect()}
        <Button onClick={this.setRedirect} variant="outline" color="primary">
        	Team Details
        </Button>
       </div>
    )
  }
}
export default RedirectButton;