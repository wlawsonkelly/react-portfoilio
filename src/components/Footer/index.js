import React from "react";
import './style.css'

function Footer() {
  return (
    <footer>
      <nav className="navbar">
        <div className="container">
          <div className="row footer">
            <div className="col-md-4 col-xs-4">
              <a className="navbar-brand" href="https://github.com/wlawsonkelly"
                >Github</a>
            </div>
            <div className="col-md-4 col-xs-4">
              <a className="navbar-brand" href="https://www.linkedin.com/in/law95/"
                >LinkedIn</a>
            </div>
            <div className="col-md-4 col-xs-4">
              <a
                className="navbar-brand"
                href="https://stackoverflow.com/users/10708100/guywitmanyhquestion"
                >Stack Overflow</a>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;