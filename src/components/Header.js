import React, { Component } from 'react';
import UlSocial from './UlSocial';

class Header extends Component {
	render() {
		return(
			<div id="header" className="home">
        <div className="container">
          <div className="header-content">
            <h1>I'm <span className="typed" /></h1>
            <p>software engineer, statistician</p>
            <p>husband & father</p>

            <UlSocial className="list-unstyled list-social" data={this.data} />

          </div>
        </div>
      </div>
		)
	}
}

export default Header;



 // <ul className="list-unstyled list-social">
            //   <li><Link to="#"><i className="ion-social-github" /></Link></li>
            //   <li><Link to="#"><i className="ion-social-linkedin" /></Link></li>
            //   <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
            //   <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
            //   <li><Link to="#"><i className="ion-social-instagram" /></Link></li>
            //   <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
            // </ul>