import React, { useState } from 'react';
import Bio from '../Bio'
import PDFViewer from 'pdf-viewer-reactjs'
import "./style.css";

function Home() {

    return (
      <div className="container">
        <br />
      <div className ="row">
          <div className = "col-md-12">
            <h1 style={{color:"white"}}>Welcome to Lawson's Portfolio</h1>
          </div>
      </div>
      <div className ="row">
          <div className = "col-md-12">
            <h1 style={{color:"white", textAlign:"left"}}>My Projects</h1>
          </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card-list">
            <div className="card">
              <div className="inner-card">
                <div className="card-front">
                  <img
                    className="card-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                    alt="Javascript"
                  />
                </div>
                <div className="card-back">
                  <h1>Note Taker</h1>
                  <p>Webapp for all your note needs </p>
                  <a href="https://github.com/wlawsonkelly/note-taker" target="_blank">Github</a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="inner-card">
                <div className="card-front">
                  <img
                    className="card-img"
                    src="https://developer.apple.com/swift/images/swift-og.png"
                    alt="Swift"
                  />
                </div>
                <div className="card-back">
                  <h1>Crusht</h1>
                  <p>Dating app that allows users to match via venues</p>
                  <a href="https://apps.apple.com/us/app/crusht/id1452128566">Download</a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="inner-card">
                <div className="card-front">
                  <img
                    className="card-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                    alt="React"
                  />
                </div>
                <div className="card-back">
                  <h1>Snippet</h1>
                  <p>Save your code so you can use it later</p>
                  <a href="https://polar-plateau-33965.herokuapp.com/login">Go to Site</a>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
      <br />
      <div className ="row">
          <div className = "col-md-12">
            <h1 style={{color:"white",textAlign:"left"}}>A Little About Me</h1>
          </div>
      </div>
      <Bio>
      </Bio>  
      <br />

      <div className ="row">
          <div className = "col-md-12">
            <h1 style={{color:"white", textAlign:"left"}}>My Resume</h1>
          </div>
      </div>
      <iframe src="https://drive.google.com/file/d/1OkCFnzelgnxgsO0Gke8bu6BHQWvhw-Ws/preview" width="640" height="900"></iframe>      </div>
    );
  }


export default Home;