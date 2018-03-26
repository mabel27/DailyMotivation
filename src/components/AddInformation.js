import React from 'react';
import {FormControl, FormGroup, Button, Form, ControlLabel, Col} from 'react-bootstrap';

class AddInformation extends React.Component {

/*

  nameRef = React.createRef();
  imageRef = React.createRef();
  typeRef = React.createRef();
  notesRef = React.createRef();

  addInfo = (event) => {
  //1. Stop the form form submitting
  event.preventDefault();
  const information = {
    name: this.nameRef.value.value,
    image: this.imageRef.value.value,
    type: this.typeRef.value.value,
    notes: this.notesRef.value.value,
  };
  this.props.addInfo(information);
  //refresh the form
  event.currentTarget.reset();

  };

  */

	render (){
		return(
      <Col md={12}>
		 <Form horizontal className="myForm" onSubmit={this.addInfo}>
		  <p className="addInfo"><span className="p">W</span>hat inspired you today<span className="p">?</span></p>
  			<FormGroup  bssize="small" >
    			<ControlLabel>Name</ControlLabel>
      			<FormControl name="name" ref={this.nameRef} type="text" placeholder="Name" />
  			</FormGroup>

  			<FormGroup bsSize="small" >
    			<ControlLabel>Image</ControlLabel>
      				<FormControl name="image" type="text" ref={this.imageRef} placeholder="Image" />
  			</FormGroup>

  			<FormGroup bsSize="small">
      			<ControlLabel>Type</ControlLabel>
      				<FormControl name="type" componentClass="select" ref={this.typeRef} placeholder="Type">
      					<option value="">Select</option>
        				<option value="picture">Picture</option>
        				<option value="link">Link</option>
        				<option value="reminder">Reminder</option>
      				</FormControl>
   			</FormGroup>

   			<FormGroup cbsSize="small">
      			<ControlLabel>Notes</ControlLabel>
      			<FormControl name="notes" componentClass="textarea" ref={this.notesRef} placeholder= "Notes" />
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
