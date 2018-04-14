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
                  <img src="images/me.jpg" className="img-responsive" alt="me" />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-descr">
                <p className="p-heading">I`m Statistician become Software Engineer based on Jakarta, Indonesia. I learn to write clean, simple, &amp; effective code.</p>
                <p className="separator">For me its hard to become Software Engineer, but nothing impossible right? Altough it`s hard i think i can be a great Software Engineer!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
		)
	}
}

export default About;