import React from 'react';
import {Col, Row} from 'react-bootstrap';
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
    	<Col md={8}>
    	<Row>
    	{Object.keys(data).map(key => <Information key={key} data={data[key]}/> )}
    	</Row>
    	</Col>
      <Col md={4}>
      <AddInformation/>
      </Col>
    	</Col>
		</div>
		</Col>
    );
  }
}

export default App;
