import React, { Component } from 'react';

class Journal extends Component {
	 data = [
	  {id:1, title: 'THE THING ABOUT ES6', body: 'all about you is beautiful3'},
	  {id:2, title: 'THE THING ABOUT ES6', body: 'all about you is beautiful1'},
	  {id:3, title: 'THE THING ABOUT ES6', body: 'all about you is beautiful2'},
	  {id:4, title: 'THE THING ABOUT ES6', body: 'all about you is beautiful4'},
	  {id:5, title: 'THE THING ABOUT ES6', body: 'all about you is beautiful5'},
	  {id:6, title: 'THE THING ABOUT ES6', body: 'all about you is beautiful6'},
	]
	render() {
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
			      	this.data.map(( {id, title, body} ) => {
								return(
									<div key={id} className="col-lg-4 col-md-6">
									  <div className="journal-info">
									    <a href="blog-single.html"><img src="images/blog-post-1.jpg" className="img-responsive" alt="img" /></a>
									    <div className="journal-txt">
									      <h4><a href="blog-single.html">{title}</a></h4>
									      <p className="separator">{body}</p>
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