import React, { Component } from 'react';
import axios from 'axios';
class Post extends Component {
	constructor(){
		super();
		this.state = {
			post: null
		};
	}

	componentDidMount() {
		const slug = this.props.location.pathname.split('/').reverse()[0];
		axios
			.get(`https://mafazans-api.herokuapp.com/api/getpost/${slug}`)
			.then(res => this.setState({ post: res.data}))
			.catch(err => console.log(err))
	}

	render() {
		if(this.state.post){
			const { _id, title, content, photo} = this.state.post;
			return(
				<div className="main-content paddsection">
				  <div className="container">
				    <div className="row justify-content-center">
				      <div className="col-md-8 col-md-offset-2">
				        <div className="row">
				        	<div key={_id} className="container-main single-main">
				        	  <div className="col-md-12">
				        	    <div className="block-main mb-30">
				        	      <img src={`https://mafazans-api.herokuapp.com/uploads/${photo}`} className="img-responsive" alt="post" />
				        	      <div className="content-main single-post padDiv">
				        	        <div className="journal-txt">
				        	          <h4><a>{title}</a></h4>
				        	        </div>
				        	        <div className="post-meta">
				        	          <ul className="list-unstyled mb-0">
				        	            <li className="author">by:<a>medsign</a></li>
				        	            <li className="date">date:<a>March 31, 2017</a></li>
				        	            <li className="commont"><i className="ion-ios-heart-outline" /><a>3 Comments</a></li>
				        	          </ul>
				        	        </div>
				        	        <p>{content}</p>
				        	      </div>
				        	    </div>
				        	  </div>
				        	</div>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>
			)
		}

		return <div>Loading</div>
	}
}

export default Post;