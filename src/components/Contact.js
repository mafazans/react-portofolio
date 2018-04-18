import React, { Component } from 'react';
import ContactForm from './ContactForm';

class Contact extends Component {
	constructor() {
		super();
		this.state = {
			messages: {},
		};
	}
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
		        		<ContactForm />
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}

export default Contact;