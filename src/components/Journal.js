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

componentDidMount() {
  axios
    .get(`https://mafazans-api.herokuapp.com/api/getposts`)
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
			      	this.state.posts.map(( { _id, title, content, slug, photo } ) => {
			      	let	shortContent = content.substr(0,100) + '...';
								return(
									<div key={_id} className="col-lg-4 col-md-6">
									  <div className="journal-info">
									    <Link to={`/blog/${slug}`}><img src={`https://mafazans-api.herokuapp.com/uploads/${photo}`} className="img-responsive" alt="post" /></Link>
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