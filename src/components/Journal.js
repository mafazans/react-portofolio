import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Journal extends Component {
	constructor(){
		super();
		this.state = {
			posts: []
		};
	}

componentWillMount() {
  axios
    .get(`https://mafazans.herokuapp.com/api`)
    .then(res => this.setState({ posts: res.data }))
    .catch(err => console.log(err))
}

	render() {
		// console.log(this.state.posts);
		return(
			<div id="journal" className="text-left paddsection">
			  <div className="container">
			    <div className="section-title text-center">
			      <h2>Blog Post</h2>
			    </div>
			  </div>
			  <div className="container">
			    <div className="journal-block">
			      <div className="row">
			      {
			      	this.state.posts.map(( {_id, title, content, slug} ) => {
			      	let	shortContent = content.substr(0,100) + '...';
								return(
									<div key={_id} className="col-lg-4 col-md-6">
									  <div className="journal-info">
									    <a href="blog-single.html"><img src="images/blog-post-1.jpg" className="img-responsive" alt="img" /></a>
									    <div className="journal-txt">
									      <h4><Link to={`/blog/${slug}`}>{title}</Link></h4>
									      <p className="separator">{shortContent}</p>
									    </div>
									  </div>
									</div>
								)
			      	})
			      }
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}

export default Journal;