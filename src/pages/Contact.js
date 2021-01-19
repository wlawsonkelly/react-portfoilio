import React, { Component } from "react";
import Card from "../components/Card";
import {Container} from 'react-bootstrap';
// import { Col, Row, Container } from 

function Contact() {
    return (
      <Container>
             <div class="row">
            <div class="col-md-6 contact-form col-xs-12">
                    <form>
                            <div class="form-group">
                              <label for="exampleFormControlInput1">Your Email</label>
                              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="form-group">
                              <label for="exampleFormControlSelect1">Select Topic</label>
                              <select class="form-control" id="exampleFormControlSelect1">
                                <option>Hire</option>
                                <option>Hangout</option>
                                <option>Find Rates</option>
                                <option>Film Making</option>
                              </select>
                            </div>
                            
                            <div class="form-group">
                              <label for="exampleFormControlTextarea1">Type Request Here</label>
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                          </form>
            </div>
        </div>
      </Container>
    );
  }


export default Contact;