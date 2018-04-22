import React, { Component } from 'react';

class About extends Component {
	render() {
		return(
      <div id="about" className="paddsection">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 ">
              <div className="div-img-bg">
                <div className="about-img">
                  <img src="images/me.png" className="img-responsive" alt="me" />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-descr">
                <p className="p-heading">I`m Statistician &amp; Software Engineer based on Jakarta, Indonesia. Always try to write clean, simple, &amp; effective code.</p>
                <p className="separator">I`m a highly motivated statistics graduatee who interested in Computer Science &amp; Programming.</p>
                <p className="separator">For me its hard to become Software Engineer, but nothing impossible right?</p>
                <p className="separator">If u want to know where i get my degree, what tech stack i love, u can see a little bit below :)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
		)
	}
}

export default About;