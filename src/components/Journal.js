import React, { Component } from 'react';

class Journal extends Component {
	render() {
		return(
			<div id="journal" className="text-left paddsection">
			  <div className="container">
			    <div className="section-title text-center">
			      <h2>journal</h2>
			    </div>
			  </div>
			  <div className="container">
			    <div className="journal-block">
			      <div className="row">
			        <div className="col-lg-4 col-md-6">
			          <div className="journal-info">
			            <a href="blog-single.html"><img src="images/blog-post-1.jpg" className="img-responsive" alt="img" /></a>
			            <div className="journal-txt">
			              <h4><a href="blog-single.html">SO LETS MAKE THE MOST IS BEAUTIFUL</a></h4>
			              <p className="separator">To an English person, it will seem like simplified English
			              </p>
			            </div>
			          </div>
			        </div>
			        <div className="col-lg-4 col-md-6">
			          <div className="journal-info">
			            <a href="blog-single.html"><img src="images/blog-post-2.jpg" className="img-responsive" alt="img" /></a>
			            <div className="journal-txt">
			              <h4><a href="#blog-single.html">WE'RE GONA MAKE DREAMS COMES</a></h4>
			              <p className="separator">To an English person, it will seem like simplified English
			              </p>
			            </div>
			          </div>
			        </div>
			        <div className="col-lg-4 col-md-6">
			          <div className="journal-info">
			            <a href="blog-single.html"><img src="images/blog-post-3.jpg" className="img-responsive" alt="img" /></a>
			            <div className="journal-txt">
			              <h4><a href="blog-single.html">NEW LIFE CIVILIZATIONS TO BOLDLY</a></h4>
			              <p className="separator">To an English person, it will seem like simplified English
			              </p>
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

export default Journal;