import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Services from './Services';
import Portofolio from './Portofolio';
import Journal from './Journal';
import Contact from './Contact';

class HomeWrapper extends Component {
	render() {
		return(
			<div>
				<Header />
				<About />
				<Services />
				<Portofolio />
				<Journal />
				<Contact />
			</div>
		)
	}
}

export default HomeWrapper;