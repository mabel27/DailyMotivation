import React from 'react';
import {Col} from 'react-bootstrap';
import Welcome from './Welcome';
import AddInformation from './AddInformation';
import Information from './Information';
import data from '../sampleData';


class App extends React.Component {

	state = {

  		data_ : {},
  	}

  render() {

  	//const {data} = this.getData();
    return (

    	<Col md={12}>
    	<div className="myBackgroundWelcome" >
    	<Welcome tagline="Today Is" />
    	<Col md={12}>
    	<AddInformation/>
    	<Col md={6}>
    	<ul>
    	{Object.keys(data).map(key => <Information key={key} data={data[key]}/> )}
    	</ul>
    	</Col>
    	</Col>
		</div>
		</Col>
    );
  }
}

export default App;
