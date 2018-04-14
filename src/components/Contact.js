import React, { Component } from 'react';

class Contact extends Component {
	render(){
		return(
			<div id="contact" className="paddsection">
			  <div className="container">
			    <div className="contact-block1">
			      <div className="row">
			        <div className="col-lg-6">
			          <div className="contact-contact">
			            <h2 className="mb-30">GET IN TOUCH</h2>
			            <ul className="contact-details">
			              <li><span>23 Main, Street</span></li>
			              <li><span>New York, United States</span></li>
			              <li><span>+88 01912704287</span></li>
			              <li><span>example@example.com</span></li>
			            </ul>
			          </div>
			        </div>
			        <div className="col-lg-6">
			          <form method="post" role="form" className="contactForm">
			            <div className="row">
			              <div id="sendmessage">Your message has been sent. Thank you!</div>
			              <div id="errormessage" />
			              <div className="col-lg-6">
			                <div className="form-group contact-block1">
			                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
			                  <div className="validation" />
			                </div>
			              </div>
			              <div className="col-lg-6">
			                <div className="form-group">
			                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
			                  <div className="validation" />
			                </div>
			              </div>
			              <div className="col-lg-12">
			                <div className="form-group">
			                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
			                  <div className="validation" />
			                </div>
			              </div>
			              <div className="col-lg-12">
			                <div className="form-group">
			                  <textarea className="form-control" name="message" rows={12} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
			                  <div className="validation" />
			                </div>
			              </div>
			              <div className="col-lg-12">
			                <input type="submit" className="btn btn-defeault btn-send" defaultValue="Send message" />
			              </div>
			            </div>
			          </form>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}

export default Contact;