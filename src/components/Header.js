import React from 'react';
import {bounceInDown, pulse } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { Link } from 'react-router-dom';
import {Col} from  'react-bootstrap';
import {getQuote} from '../helpers';
import '../style.css';

const styles = {
  pulse: {
    animation: 'x 3s infinite',
    animationName: Radium.keyframes(pulse, 'pulse')
  },

  bounceInDown: {
    animation: 'x 3s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
  }
}

class Header extends React.Component {
	render ()
	{
	return (
       <StyleRoot>
        
        <Col md={12} sm={6} >
	          	<h1 className="header" style={styles.bounceInDown} >
	          	Your <span className="p" >P</span>otential is
	          		 <span className="header1"  >
	          		 <span className="e">E</span>ndless.</span>
	          	</h1>
	          	<h2  className="quoteOfTheDay">{getQuote()}</h2>
		</Col>

	    <Col md={12} sm={6} >

	      		<ul >
		          	<li className="liStart"  >
		          		<Link className="start" to='/App'>Start!</Link>
		          	</li>

		         </ul>
		</Col>
	
	</StyleRoot>
		);
	}
}
export default Header;

