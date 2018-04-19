import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeWrapper from './components/HomeWrapper';
import BlogWrapper from './components/BlogWrapper';
import PostWrapper from './components/PostWrapper';
import Footer from './components/Footer';
import my404 from './components/my404';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<BrowserRouter>
      	<div>
	      	<Navbar />
  	        <Switch>
            <Route exact path="/" component={HomeWrapper} />
            <Route exact path="/blog" component={BlogWrapper} />
  	        <Route exact path="/blog/:slug" component={PostWrapper} />

            <Route component={my404} />
            </Switch>
		    	<Footer />
	      </div>
      	</BrowserRouter>
      </div>
    );
  }
}

export default App;
