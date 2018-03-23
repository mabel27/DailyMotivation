import React from 'react';

class Quotes extends React.Component {

	render (){

		const {name, image} = this.props.details;
		return(
		<li>
			<h2>{name}</h2>
			<img src={image} alt={name} />
		</li>	
		);
	}
}
export default Quotes;
