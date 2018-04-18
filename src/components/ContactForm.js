import React, { Component } from 'react';

class ContactForm extends Component {
	createMessage(event) {
		event.preventDefault();
		console.log('Gonna make some message');
		const message = {
			name: this.name.value,
			email: this.email.value,
			subject: this.subject.value,
			message: this.message.value,
		}
		console.log(message);
	}

	render(){
		return(
			<form className="contactForm" onSubmit={(e) => this.createMessage(e)}>
			  <div className="row">
			    <div id="sendmessage">Your message has been sent. Thank you!</div>
			    <div id="errormessage" />
			    <div className="col-lg-6">
			      <div className="form-group contact-block1">
			        <input ref={(input) => this.name = input} type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
			        <div className="validation" />
			      </div>
			    </div>
			    <div className="col-lg-6">
			      <div className="form-group">
			        <input ref={(input) => this.email = input} type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
			        <div className="validation" />
			      </div>
			    </div>
			    <div className="col-lg-12">
			      <div className="form-group">
			        <input ref={(input) => this.subject = input} type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
			        <div className="validation" />
			      </div>
			    </div>
			    <div className="col-lg-12">
			      <div className="form-group">
			        <textarea ref={(input) => this.message = input} className="form-control" name="message" rows={12} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
			        <div className="validation" />
			      </div>
			    </div>
			    <div className="col-lg-12">
			      <input type="submit" className="btn btn-defeault btn-send" defaultValue="Send message" />
			    </div>
			  </div>
			</form>
		)
	}
}

export default ContactForm;