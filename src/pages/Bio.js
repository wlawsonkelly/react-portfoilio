import React, { Component } from "react";
import Card from "../components/Card";
import {Container} from 'react-bootstrap';
// import { Col, Row, Container } from 

function Bio() {
    return (
      <Container>
  <div class="container top-container">
                <div class="row">                          
                    <div class="col-md-4">
                        <img id ="profile-pic"src="https://media-exp1.licdn.com/dms/image/C4D03AQGiVal3GPqzMg/profile-displayphoto-shrink_400_400/0/1582910750601?e=1616630400&v=beta&t=2km_HFrv2_72rBAzJnoApmspCDIY8hkSca3k9wfZwU0" alt="Me" />
                    </div>
                    <div class="col-md-8">
                            <p>Graduated from Boston College in 2018 and am currently finishing a coding bootcamp at UCLA. As a screenwriter I'm looking to get involved in working for a streaming service. Check out my startup Crusht on the app store!</p>
                    </div> 
                </div>
            </div>
      </Container>
    );
  }


export default Bio;