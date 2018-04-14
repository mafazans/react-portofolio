import React, { Component } from 'react';

class Portofolio extends Component {
	render() {
		return(
			<div id="portfolio" className="text-center paddsection">
			  <div className="container">
			    <div className="section-title text-center">
			      <h2>My Portfolio</h2>
			    </div>
			  </div>
			  <div className="container">
			    <div className="row">
			      <div className="col-md-12">
			        <div className="portfolio-list">
			          <ul className="nav list-unstyled" id="portfolio-flters">
			            <li className="filter filter-active" data-filter=".all">all</li>
			            <li className="filter" data-filter=".branding">branding</li>
			            <li className="filter" data-filter=".mockups">mockups</li>
			            <li className="filter" data-filter=".uikits">ui kits</li>
			            <li className="filter" data-filter=".webdesign">web design</li>
			            <li className="filter" data-filter=".photography">photography</li>
			          </ul>
			        </div>
			        <div className="portfolio-container">
			          <div className="col-lg-4 col-md-6 portfolio-thumbnail all branding uikits webdesign">
			            <a className="popup-img" href="images/portfolio/1.jpg">
			              <img src="images/portfolio/1.jpg" alt="img" />
			            </a>
			          </div>
			          <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits photography">
			            <a className="popup-img" href="images/portfolio/2.jpg">
			              <img src="images/portfolio/2.jpg" alt="img" />
			            </a>
			          </div>
			          <div className="col-lg-4 col-md-6 portfolio-thumbnail all branding webdesig photographyn">
			            <a className="popup-img" href="images/portfolio/3.jpg">
			              <img src="images/portfolio/3.jpg" alt="img" />
			            </a>
			          </div>
			          <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups webdesign photography">
			            <a className="popup-img" href="images/portfolio/4.jpg">
			              <img src="images/portfolio/4.jpg" alt="img" />
			            </a>
			          </div>
			          <div className="col-lg-4 col-md-6 portfolio-thumbnail all branding uikits photography">
			            <a className="popup-img" href="images/portfolio/5.jpg">
			              <img src="images/portfolio/5.jpg" alt="img" />
			            </a>
			          </div>
			          <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits webdesign">
			            <a className="popup-img" href="images/portfolio/6.jpg">
			              <img src="images/portfolio/6.jpg" alt="img" />
			            </a>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}

export default Portofolio;