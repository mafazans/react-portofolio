import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeWrapper from './components/HomeWrapper';
import BlogWrapper from './components/BlogWrapper';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<BrowserRouter>
      	<div>
	      	<Navbar />
  	        <Route exact path="/" component={HomeWrapper} />
  	        <Route path="/blog" component={BlogWrapper} />
		    	<Footer />
	      </div>
      	</BrowserRouter>
      </div>
    );
  }
}

export default App;
