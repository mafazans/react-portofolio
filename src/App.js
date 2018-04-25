import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeWrapper from './components/HomeWrapper';
import Journal from './components/Journal';
import Post from './components/blog/Post';
import PostForm from './components/blog/PostForm';

import Footer from './components/Footer';
import notFound from './components/notFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <Navbar />
            <Switch>
            <Route exact path="/" component={HomeWrapper} />
            <Route exact path="/blog" component={Journal} />
            <Route exact path="/blog/:slug" component={Post} />
            <Route exact path="/post" component={PostForm} />

            <Route component={notFound} />
            </Switch>
		    	<Footer />
	      </div>
      	</BrowserRouter>
      </div>
    );
  }
}

export default App;
