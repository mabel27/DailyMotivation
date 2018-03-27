import React from 'react';
import {FormControl, FormGroup, Button, Form, ControlLabel, Col} from 'react-bootstrap';

class AddInformation extends React.Component {
	
	addInfo(e){
		e.preventDefault();

		console.log(this.nameInput.value);
		console.log(this.imageInput.value);
		console.log(this.typeInput.value);
		console.log(this.notesInput.value);

		//TODO add logic to add new Information

	}

	render (){
		return(
      <Col md={12}>
		 <Form horizontal className="myForm" onSubmit={this.addInfo.bind(this)}>
		  <p className="addInfo"><span className="p">W</span>hat inspired you today<span className="p">?</span></p>
  			<FormGroup  bssize="small" >
    			<ControlLabel>Name</ControlLabel>
      			<FormControl name="name" inputRef={(name) => { this.nameInput = name; }} type="text" placeholder="Name" />
  			</FormGroup>

  			<FormGroup bsSize="small" >
    			<ControlLabel>Image</ControlLabel>
      				<FormControl name="image" type="text" inputRef={(image) => { this.imageInput = image; }} placeholder="Image" />
  			</FormGroup>

  			<FormGroup bsSize="small">
      			<ControlLabel>Type</ControlLabel>
      				<FormControl name="type" componentClass="select" inputRef={(type) => { this.typeInput = type; }} placeholder="Type">
      					<option value="">Select</option>
        				<option value="picture">Picture</option>
        				<option value="link">Link</option>
        				<option value="reminder">Reminder</option>
      				</FormControl>
   			</FormGroup>

   			<FormGroup cbsSize="small">
      			<ControlLabel>Notes</ControlLabel>
      			<FormControl name="notes" componentClass="textarea" inputRef={(notes) => { this.notesInput = notes; }} placeholder= "Notes" />
    		</FormGroup>

    		<FormGroup bsSize="small" className="pBox">
      			<Button className="mySubmit" type="submit">Add new info</Button>
  			</FormGroup>
  	</Form>
    </Col>
		);
	}
}
export default AddInformation;
