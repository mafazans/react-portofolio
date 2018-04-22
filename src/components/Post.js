import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
	constructor(){
		super();
		this.state = {
			post: []
		}
	}

	componentDidMount() {
		const path = this.props.location.pathname.split('/').reverse()[0];
	  axios
	    .get(`https://mafazans.herokuapp.com/api/post/${path}`)
	    .then(res => this.setState({ post: res.data }))
	    .catch(err => console.log(err))
	}

	render(){
		return(
			<div className="main-content paddsection">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-md-8 col-md-offset-2">
			        <div className="row">
			          <div className="container-main single-main">
			            <div className="col-md-12">
            	      {
            	      	this.state.post.map(( { _id, title, content, photo } ) => {
            						return(
          								<div key={_id} className="block-main mb-30">
          								  <img src={`https://mafazans.herokuapp.com/uploads/${photo}`} className="img-responsive" alt="img" />
          								  <div className="content-main single-post padDiv">
          								    <div className="journal-txt">
          								      <h2><a>{title}</a></h2>
          								    </div>
          								    <div className="post-meta">
          								      <ul className="list-unstyled mb-0">
          								        <li className="author">by:<a>medsign</a></li>
          								        <li className="date">date:<a>March 31, 2017</a></li>
          								        <li className="commont"><i className="ion-ios-heart-outline" /><a >3 Comments</a></li>
          								      </ul>
          								    </div>
          								    <p className="mb-30">{content}</p>
          								  </div>
          								</div>
            						)
            	      	})
            	      }
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}

export default Post;

