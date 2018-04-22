import React, { Component } from 'react';

class Teaser extends Component {
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
			        <span>JS</span>
			        <p className="separator">My favorite language</p>
			        <p className="separator">Easy to learn, very hard to master</p>
			      </div>
			      <div className="services-block">
			        <i className="ion-social-nodejs" />
			        <span>NODE JS</span>
			        <p className="separator">Javascript backend platform</p>
			        <p className="separator">I will go fulstack then!</p>
			      </div>
			      <div className="services-block">
			        <i className="ion-ios-analytics-outline" />
			        <span>Analytical</span>
			        <p className="separator">I have a great analytical thinking</p>
			        <p className="separator">Thanks to my statistics major</p>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}

export default Teaser;