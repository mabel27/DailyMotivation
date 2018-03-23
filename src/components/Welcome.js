import React from 'react';
import Favorite from './Favorite';
import {Col} from 'react-bootstrap';

class Welcome extends React.Component {
  render() {
    return (
    	<Col md={12} sm={6} >
    		<div className="myBackgroundWelcome" >
    			<div className="welcomeHeader">
    			<h1>
    			>Go Do What you were Created to Do! 
    			</h1>
    			</div>
    			<Favorite />
    		</div>
       </Col>
    );
  }
}

export default Welcome;