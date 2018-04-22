import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Teaser from './Teaser';
import Portofolio from './Portofolio';
import Journal from './Journal';
import Contact from './Contact';

class HomeWrapper extends Component {
	render() {
		return(
			<div>
				<Header />
				<About />
				<Teaser />
				<Portofolio />
				<Journal />
				<Contact />
			</div>
		)
	}
}

export default HomeWrapper;