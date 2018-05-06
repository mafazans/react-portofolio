import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
      <nav id="main-nav">
        <div className="row">
          <div className="container">
            <div className="logo">
              <Link to="/"><img src="images/logo.png" alt="logo" /></Link>
            </div>
            <div className="responsive"><i data-icon="m" className="ion-navicon-round" /></div>
            <ul className="nav-blog list-unstyled">
              <li><Link to="/signup">Register</Link></li>
              <li><Link to="/signin">Login</Link></li>
              <li><Link to="#journal">Blog</Link></li>
            </ul>
            <ul className="nav-menu list-unstyled">
              <li><Link to="./#header" className="smoothScroll">Home</Link></li>
              <li><Link to="./#about" className="smoothScroll">About</Link></li>
              <li><Link to="./#portfolio" className="smoothScroll">Portfolio</Link></li>
              <li><Link to="./#contact" className="smoothScroll">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;

