import React from 'react';
import {Col} from 'react-bootstrap';

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
				<li>					
					<button onClick={this.handleSaveClick.bind(this)}>Save</button>
				</li>	
				);
		}
		else {
			return (
				<li>
					<p>{name} - <span>{type}</span></p>
					<img src={image || 'images/park.jpg'} alt={name} />
					<p>Notes: {notes}</p>
					<button onClick={this.handleEditClick.bind(this)}>Edit</button>
				</li> 
			);
		};
	}
}
export default Information;
