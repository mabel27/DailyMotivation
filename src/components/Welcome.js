import React from 'react';
import Favorite from './Favorite';
import {Col} from 'react-bootstrap';
import Quotes from './Quotes';
import sampleQuotes from '../sampleQuotes';

class Welcome extends React.Component {

  state = {
    quotes: {},
  } 

  loadSampleQuotes = () => {

    this.setState({quotes: sampleQuotes});
  }

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
          <ul>
          {Object.keys(this.state.quotes).map(key =>
            <Quotes key={key} details = {this.state.quotes[key]} />
          )}
          </ul>
    		</div>
       </Col>
    );
  }
}

export default Welcome;