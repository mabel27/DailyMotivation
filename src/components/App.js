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


componentDidMount() {

    localStorage.setItem('data-storage', JSON.stringify(this.state.data_));
    
  }

    componentDidUpdate(){

     localStorage.setItem('data-storage', JSON.stringify(this.state.data_));
    }

    AddInformation = data1_ => {
    //1. Take a copy of the existing state ()
    const data_ = {...this.state.data_};
    //2. Add a new fish to that fishes variable
    data_[`data1_${Date.now()}`] = data1_;
    //3. Set the new fishes object to state
      this.setState({
        data_:data_
      });
  };


  render() {

  	//const {data} = this.getData();
    return (

    	<Col md={12}>
	      	<Welcome tagline="Today Is" />
	      	<Col md={12}>
	          	<Col md={8}>
	          	<Row>
	          	{Object.keys(data).map(key => <Information key={key} data={data[key]}/> )}
	          	</Row>
	          	</Col>
	            <Col md={4}>
	            <AddInformation AddInformation={this.AddInformation}  />
	            </Col>
	      	</Col>
	      	 <img src="/images/confetti3.png" className="confetti" alt="confetti"/>
		</Col>
    );
  }
}

export default App;
