import React from 'react';
import {Col, FormControl, FormGroup, Button, Form, ControlLabel} from 'react-bootstrap';

class AddInformation extends React.Component {

	render (){
		return(
		<Col md = {4} >
		
		 <Form horizontal className="myForm">
		  <h3 className="favorite"><span className="p">W</span>hat inspired you today<span className="p">?</span></h3>
  			<FormGroup  bssize="small" >
    			<ControlLabel>Name</ControlLabel>
      			<FormControl type="text" placeholder="Name" />
  			</FormGroup>

  			<FormGroup bsSize="small" >
    			<ControlLabel>Image</ControlLabel>
      				<FormControl type="text" placeholder="Image" />
  			</FormGroup>

  			<FormGroup bsSize="small">
      			<ControlLabel>Type</ControlLabel>
      				<FormControl componentClass="select" placeholder="Type">
      					<option value="">Select</option>
        				<option value="picture">Picture</option>
        				<option value="link">Link</option>
        				<option value="reminder">Reminder</option>
      				</FormControl>
   			</FormGroup>

   			<FormGroup cbsSize="small">
      			<ControlLabel>Notes</ControlLabel>
      			<FormControl componentClass="textarea" placeholder= "Notes" />
    		</FormGroup>

    		<FormGroup bsSize="small">
      			<Button className="mySubmit" type="submit">Add new info</Button>
  			</FormGroup>
  	</Form>
		</Col>
		
		);
	}
}
export default AddInformation;
