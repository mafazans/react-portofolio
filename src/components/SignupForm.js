import React, { Component } from 'react';
import axios from 'axios';
import { isEmail } from 'validator';

class SignupForm extends Component {
	state = {
		fields: {
			email: "",
			password: ""
		},
		status: {},
		fieldErrors: {}
	}

	validate = (auth) => {
		const errors = {};
		if(!auth.email) errors.email = 'Please enter your email';
		if(!auth.password) errors.password = 'Please enter your password';
		if(auth.email && !isEmail(auth.email)) errors.email = 'Invalid email';
		return errors;
	}

	onFormSubmit = async evt => {
		const auth = this.state.fields;
		const fieldErrors = this.validate(auth);
		this.setState({fieldErrors});
		evt.preventDefault();
		if(Object.keys(fieldErrors).length) return;

		await axios.post('https://mafazans-api.herokuapp.com/api/auth/signup', auth)
		.then(res => this.setState({ status: res.data}))
		.catch(err => this.setState({ fieldErrors: err.response.data }));
	}

	onInputChange = (evt) => {
		const fields = this.state.fields;
		fields[evt.target.name] = evt.target.value;
		this.setState({fields});
	}

	render(){
		return(
			<div id="post-form" className="paddsection">
				<div className="container">
					<h1>Register your account</h1>
					<br/>
					<br/>
					<br/>
					<form>
						<div className="row">
							<div className="col-lg-4">
								<input
									placeholder="Email"
									name="email"
									value={this.state.fields.email}
									onChange={this.onInputChange}
									className="form-control"
								/>
							</div>
							<div className="col-lg-8">
							<span style={{ color: 'red'}}>{this.state.fieldErrors.email}</span>
							<span style={{ color: 'red'}}>{this.state.fieldErrors.message}</span>
							</div>
							<div className="col-lg-4">
								<div className="form-group">
									<input
										placeholder="Password"
										name="password"
										value={this.state.fields.password}
										onChange={this.onInputChange}
										className="form-control"
									/>
								</div>
							</div>
							<div className="col-lg-8">
							<span style={{ color: 'red'}}>{this.state.fieldErrors.password}</span>
							</div>
							<div className="col-lg-12">
								<button
									type = "button"
									onClick={this.onFormSubmit}
									className="btn btn-defeault btn-send"
									>Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default SignupForm;
