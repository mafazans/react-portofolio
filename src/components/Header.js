import React, { Component } from 'react';
import UlSocial from './UlSocial';

class Header extends Component {
	render() {
		return(
            <div id="header">
                <div className="container">
                    <div className="header-content">
                        <h1>I`m <span className="typed" /></h1>
                        <p>software engineer, statistician</p>
                        <p>husband & father</p>
                        <UlSocial className="list-unstyled list-social" data={this.data} />
                        <p>Always Under Construction - for improvement <br />
                        Built using MERN Stack</p>
                    </div>
                </div>
            </div>
		)
	}
}

export default Header;