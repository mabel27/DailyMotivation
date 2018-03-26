import React from 'react';
import {FormControl, FormGroup, Button, Form, ControlLabel} from 'react-bootstrap';

class AddInformation extends React.Component {

	render (){
		return(
		 <Form horizontal className="myForm">
		  <p className="addInfo"><span className="p">W</span>hat inspired you today<span className="p">?</span></p>
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

    		<FormGroup bsSize="small" className="pBox">
      			<Button className="mySubmit" type="submit">Add new info</Button>
  			</FormGroup>
  	</Form>
		);
	}
}
export default AddInformation;
