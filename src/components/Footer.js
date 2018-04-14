import React, { Component } from 'react';
import UlSocial from './UlSocial';

class Footer extends Component {
	render(){
		return(
			<div id="footer" className="text-center">
			  <div className="container">
			    <div className="socials-media text-center">
				     <UlSocial className="list-unstyled" data={this.data} />
			    </div>
			    <p>© Copyrights Folio. All rights reserved.</p>
			    <div className="credits">
			      {/*
			    All the links in the footer should remain intact.
			    You can delete the links only if you purchased the pro version.
			    Licensing information: https://bootstrapmade.com/license/
			    Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Folio
			  */}
			      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
			    </div>
			  </div>
			</div>
		)
	}
}

export default Footer;