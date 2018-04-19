import React, { Component } from 'react';

class Services extends Component {
	render() {
		return(
			<div id="services">
			  <div className="container">
			    <div className="services-carousel owl-theme">
			      <div className="services-block">
			        <i className="ion-university" />
			        <span>UGM</span>
			        <p className="separator">Universitas Gadjah Mada</p>
			        <p className="separator">Bachelor of Statistics, 2010 - 2015</p>
			      </div>
			      <div className="services-block">
			        <i className="ion-social-javascript" />
			        <span>JAVASCRIPT</span>
			        <p className="separator">My favorite language</p>
			        <p className="separator">Easy to learn, very hard to master</p>
			      </div>
			      <div className="services-block">
			        <i className="ion-social-nodejs" />
			        <span>NODE JS</span>
			        <p className="separator">To an English person, it will seem like simplified English,told me what </p>
			      </div>
			      <div className="services-block">
			        <i className="ion-ios-analytics-outline" />
			        <span>Analytical</span>
			        <p className="separator">I have a great analytical thinking, thanks to my statistics major</p>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}

export default Services;