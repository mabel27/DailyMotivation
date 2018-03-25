import React from 'react';
import {Col} from 'react-bootstrap';
import Welcome from './Welcome';
import AddInformation from './AddInformation';
import Favorite from './Favorite';


class App extends React.Component {

	state = {

  		data : {},
  	}

  render() {
    return (

    	<Col md={12}>
    	<div className="myBackgroundWelcome" >
    	<Welcome tagline="Today Is" />
    	<Col md={12}>
    	<AddInformation/>
    	<Favorite />
    	</Col>
		</div>
		</Col>
    );
  }
}

export default App;
