import React from 'react';
import {Col} from 'react-bootstrap';

class Information extends React.Component {

	render (){
		const {name, image, type, notes} = this.props.details;
		return(
		<Col md={6}>
		<li>
			<p>{name} - <span>{type}</span></p>
			<img src={image} alt={name} />
			<p>Notes: {notes}</p>
		</li>	
		</Col>
		
		);
	}
}
export default Information;
