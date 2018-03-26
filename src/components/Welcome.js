import React from 'react';
import {Col} from 'react-bootstrap';
import {getDate} from '../helpers';

class Welcome extends React.Component {
  render ()
  {
  return (

    <Col md={12} >
          <div className="welcomeHeader">
             <h1><span className="capitalLetter">BE</span>Lieve in <span className="capitalLetter">YOU</span>rself.</h1>
             <h2 className="todayDate">{this.props.tagline} {getDate()} </h2>
          </div>
    </Col>
);

}
}
  
export default Welcome;