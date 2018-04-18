import React, { Component } from 'react';
import axios from 'axios';

class Journal extends Component {
	constructor(){
		super();
		this.state = {
			posts: []
		};
	}

componentDidMount() {
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
			      	this.state.posts.map(( {_id, title, content} ) => {
								return(
									<div key={_id} className="col-lg-4 col-md-6">
									  <div className="journal-info">
									    <a href="blog-single.html"><img src="images/blog-post-1.jpg" className="img-responsive" alt="img" /></a>
									    <div className="journal-txt">
									      <h4><a href="blog-single.html">{title}</a></h4>
									      <p className="separator">{content}</p>
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