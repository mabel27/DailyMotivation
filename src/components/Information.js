import React from 'react';
import {Col, Thumbnail, FormControl, FormGroup, Button, Form, ControlLabel} from 'react-bootstrap';

class Information extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {editable: false};
  	}

	handleEditClick() {
		this.setState({editable: !this.state.editable});
	}

	handleSaveClick(val) {		
		//TODO save data to local storage
		let dataStorage = localStorage.getItem('data-storage');
		console.log(dataStorage);

		//localStorage.setItem('data-storage',JSON.stringify(this.props.data));
		this.setState({editable: !this.state.editable});
	}

	render (){
		const {name, image, type, notes} = this.props.data;

		if (this.state.editable) {
			return(
				<Col md={3}>
		<p className="editInfo"><span className="p">E</span>DIT<span className="p">:</span> {name}</p>
		<Form horizontal className="myForm">
  			<FormGroup  bssize="small" >
    			<ControlLabel>Name</ControlLabel>
      			<FormControl type="text" />
  			</FormGroup>

  			<FormGroup bsSize="small" >
    			<ControlLabel>Image</ControlLabel>
      				<FormControl type="text" />
  			</FormGroup>

  			<FormGroup bsSize="small">
      			<ControlLabel>Type</ControlLabel>
      				<FormControl componentClass="select" >
      					<option value="">Select</option>
        				<option value="picture">Picture</option>
        				<option value="link">Link</option>
        				<option value="reminder">Reminder</option>
      				</FormControl>
   			</FormGroup>

   			<FormGroup cbsSize="small">
      			<ControlLabel>Notes</ControlLabel>
      			<FormControl componentClass="textarea" />
    		</FormGroup>

    		<p className="pBox">
      			<Button className="mySubmit" onClick={this.handleSaveClick.bind(this)}>Save</Button>
  			</p>
  		</Form>

		</Col>	
				);
		}
		else {
			return (

				<Col md={3} >

      				<Thumbnail className="box" src={image || 'images/shape.png'} alt={name}>

        			<h3 className="boxHeader">{name} </h3>
        			<p className="boxNotes">{notes}</p>
        			<p className="pBox">
        				<Button className="mySubmit" onClick={this.handleEditClick.bind(this)}>Edit</Button>
         			</p>
      				</Thumbnail>
      			</Col>
			);
		};
	}
}
export default Information;
