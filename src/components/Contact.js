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
			              <li><span>Jl. Bima no. 2</span></li>
			              <li><span>Gamping, Sleman, Yogyakarta</span></li>
			              <li><span>+62 85899992418</span></li>
			              <li><span>arif.mafazan@gmail.com</span></li>
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