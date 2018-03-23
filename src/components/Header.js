import React from 'react';
import { flash, bounceInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { Link } from 'react-router-dom';
import {Col, Button} from  'react-bootstrap';
import '../style.css';

const styles = {
  flash: {
    animation: 'x 4s infinite',
    animationName: Radium.keyframes(flash, 'flash')
  },

  bounceInDown: {
    animation: 'x 2s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
  }
}

class Header extends React.Component {
	render ()
	{
	return (
		<Col md={12} sm={6} >
        <StyleRoot>
        <div className="myBackground" >
	          	<h1 className="header">
	          	Your <span className="p" >P</span>otential is
	          		 <span className="header1" style={styles.bounceInDown} >
	          		 <span className="e">E</span>ndless.</span>
	          	</h1>

	        	<Col md={12} sm={6}>

	      		<ul>
		          	<li style={styles.flash} >
		          		<Link className="start" to='/Welcome'>Start!</Link>
		          	</li>
		          </ul>
		         
		         </Col>
		         </div>
		       </StyleRoot>
		   </Col>
		);
	}
}
export default Header;

