import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Welcome from './Welcome';
import AddInformation from './AddInformation';
import Information from './Information';
import sampleData from '../sampleData';

class App extends React.Component {

	state = {
  		data_ : [],
  	}

  componentDidMount() {
   		 	const storageData = JSON.parse(localStorage.getItem('data-storage'));
		    if (storageData) {
		      this.setState({data_:storageData});
		    }else
		    {
		      localStorage.setItem('data-storage', JSON.stringify(sampleData));
		      this.setState({data_:sampleData});
		    }
  	}

  	componentDidUpdate() {
    		localStorage.setItem('data-storage', JSON.stringify(this.state.data_));
  	}

    AddInformation = data1_ => {
		    data1_.id = Date.now();
		    //1. Take a copy of the existing state ()
		    const data_ = [...this.state.data_];
		    //2. Add a info to that data variable
		    data_.push(data1_);
		    //3. Set the new data object to state and the local storage
		    localStorage.setItem('data-storage', JSON.stringify(data_));
		    this.setState({data_:data_});
  };

  render() {

  var data = this.state.data_ || [];
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
