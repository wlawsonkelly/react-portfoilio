import React, { Component } from "react";
import Card from "../../components/Card";
import {Container} from 'react-bootstrap';
// import { Col, Row, Container } from 
import "./style.css";

function Home() {
    return (
      <Container>
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div class="card-list">
            <div class="card">
              <div class="inner-card">
                <div class="card-front">
                  <img
                    class="card-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                    alt="Javascript"
                  />
                </div>
                <div class="card-back">
                  <h1>Note Taker</h1>
                  <p>Webapp for all your note needs </p>
                  <a href="https://github.com/wlawsonkelly/note-taker" target="_blank">Github</a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="inner-card">
                <div class="card-front">
                  <img
                    class="card-img"
                    src="https://developer.apple.com/swift/images/swift-og.png"
                    alt="Swift"
                  />
                </div>
                <div class="card-back">
                  <h1>Crusht</h1>
                  <p>Dating app that allows users to match via venues</p>
                  <img
                    class="app-store-img" 
                    src="https://miro.medium.com/max/8982/1*V9-OPWpauGEi-JMp05RC_A.png"
                    alt="app store icon"
                  />
                </div>
              </div>
            </div>
            <div class="card">
              <div class="inner-card">
                <div class="card-front">
                  <img
                    class="card-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                    alt="React"
                  />
                </div>
                <div class="card-back">
                  <h1>React Project</h1>
                  <p>Click to see github</p>
                  <p>Or dont</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div class="card-list">
            <div class="card">
              <div class="inner-card">
                <div class="card-front">
                  <img
                    class="card-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                    alt="Javascript"
                  />
                </div>
                <div class="card-back">
                  <h1>Note Taker</h1>
                  <p>Webapp for all your note needs </p>
                  <a href="https://github.com/wlawsonkelly/note-taker" target="_blank">Github</a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="inner-card">
                <div class="card-front">
                  <img
                    class="card-img"
                    src="https://developer.apple.com/swift/images/swift-og.png"
                    alt="Swift"
                  />
                </div>
                <div class="card-back">
                  <h1>Crusht</h1>
                  <p>Dating app that allows users to match via venues</p>
                  <img
                    class="app-store-img" 
                    src="https://miro.medium.com/max/8982/1*V9-OPWpauGEi-JMp05RC_A.png"
                    alt="app store icon"
                  />
                </div>
              </div>
            </div>
            <div class="card">
              <div class="inner-card">
                <div class="card-front">
                  <img
                    class="card-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                    alt="React"
                  />
                </div>
                <div class="card-back">
                  <h1>React Project</h1>
                  <p>Click to see github</p>
                  <p>Or dont</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
      </Container>
    );
  }


export default Home;