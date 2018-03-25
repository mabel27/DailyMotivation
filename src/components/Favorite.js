import React from 'react';
import {Col} from 'react-bootstrap';

class Favorite extends React.Component {
	render (){
		return(

			<Col md={8}>
				
				<ul className="postIt">
					    <li >
					        <h2>Title #1</h2>
					        <p>Text Content #1</p>
					   
					    </li>
					    <li>
					        <h2>Title #2</h2>
					        <p>Text Content #2</p>
					
					    </li>
					    <li>
					 
					        <h2>Title #3</h2>
					        <p>Text Content #3</p>
			
					    </li>
					    <li>
					
					        <h2>Title #4</h2>
					        <p>Text Content #4</p>
			
					    </li>
					    <li>
					
					        <h2>Title #5</h2>
					        <p>Text Content #5</p>
			
					    </li>
					    <li>
					
					        <h2>Title #6</h2>
					        <p>Text Content #6</p>
				
					    </li>
					    <li>
					  
					        <h2>Title #2</h2>
					        <p>Text Content #2</p>
				
					    </li>
					    <li>
					   
					        <h2>Title #7</h2>
					        <p>Text Content #7</p>
					 
					    </li>
					    <li>
					 
					        <h2>Title #8</h2>
					        <p>Text Content #8</p>
					 
					    </li>
					  </ul>
			</Col>
		);
	}

}

export default Favorite;