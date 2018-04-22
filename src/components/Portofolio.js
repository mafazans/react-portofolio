import React, { Component } from 'react';

class Portofolio extends Component {
	render() {
		return(
			<div id="portfolio" className="text-center paddsection">
			  <div className="container">
			      <h2>My Portfolio</h2>
			      <p>I`m part of the team who makes great web app below!</p>
			  </div>
			  <div className="container">
			    <div className="row">
			      <div className="col-md-12">
			        <div className="portfolio-list">
			          <ul className="nav list-unstyled" id="portfolio-flters">
			            <li className="filter filter-active" data-filter=".all">all</li>
			            <li className="filter" data-filter=".api">API</li>
			            <li className="filter" data-filter=".bugfixing">bug fixing</li>
			            <li className="filter" data-filter=".quality">QC</li>
			            <li className="filter" data-filter=".user-story">User Story</li>
			            <li className="filter" data-filter=".documentation">documentation</li>
			          </ul>
			        </div>
			        <div className="portfolio-container">
			          <div className="col-lg-4 col-md-6 portfolio-thumbnail all api bugfixing quality">
			            <a className="popup-img" href="images/portfolio/kofera.png">
			              <img src="images/portfolio/kofera.png" alt="app.kofera.com" />
			            </a>
			            <div className="porto-title">
				            <a href="https://kofera.com/">Kofera App</a>
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6 portfolio-thumbnail all user-story api bugfixing">
			            <a className="popup-img" href="images/portfolio/yellowpages.png">
			              <img src="images/portfolio/yellowpages.png" alt="yellowpages.co.id" />
			            </a>
                  <div className="porto-title">
      	            <a href="https://yellowpages.co.id/">Yellowpages Indonesia</a>
                  </div>
			          </div>
			          <div className="col-lg-4 col-md-6 portfolio-thumbnail all quality user-story bugfixing">
			            <a className="popup-img" href="images/portfolio/iklanku.png">
			              <img src="images/portfolio/iklanku.png" alt="iklanku.id" />
			            </a>
                  <div className="porto-title">
      	            <a href="https://iklanku.id/">Iklanku</a>
                  </div>
			          </div>
			          <div className="col-lg-4 col-md-6 portfolio-thumbnail all documentation">
			            <a className="popup-img" href="images/portfolio/smartpromo.png">
			              <img src="images/portfolio/smartpromo.png" alt="smartpromo.co.id" />
			            </a>
                  <div className="porto-title">
      	            <a href="https://smartpromo.co.id/">Smartpromo</a>
                  </div>
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