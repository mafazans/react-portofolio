import React, {Component} from 'react';
import axios from 'axios';

class PostForm extends Component {
	constructor() {
		super();
		this.state = {
			post: {},
		}
	}

	createPost(e){
		e.preventDefault();
		// const post = {
		// 	title : this.title.value,
		// 	content: this.content.value,
		// 	photo: this.refs.photo.files[0]
		// }
		// this.setState({post})
		const formData = new FormData();
		formData.append('title', this.title.value);
		formData.append('content', this.content.value);
		formData.append('photo', this.refs.file.files[0]);
		// const data = new FormData(this.form);
		// console.log(this.refs.file.files[0]);
		axios
			.post(`http://localhost:7777/api/post`, formData, {headers: {"Content-Type": "multipart/form-data"}})
			.then(res => this.setState({ post: res.data }))
			.catch(err => this.setState({ post: err.response.data }));
	}

		render(){
			const flashMessage = (
				<p>{this.state.post.message}</p>
				)
			return(
				<div id="post-form" className="paddsection">
					<div className="container">
						<h1>Let`s write!</h1>
					{this.state.post.status !== null && flashMessage }
						<form encType="multipart/form-data" onSubmit={(e) => this.createPost(e)}>
					  <div className="row">
					    <div className="col-lg-12">
					      <div className="form-group">
					        <input ref={(input) => this.title = input} type="text" className="form-control" name="title" id="title" placeholder="Subject"	/>
					      </div>
					    </div>
					    <div className="col-lg-12">
					        <textarea ref={(input) => this.content = input} className="form-control" name="content" placeholder="content" defaultValue={""} />
					    </div>
					    <div className="col-lg-12">
					        <input type="file" ref="file" name= "photo" className="form-control" />
					    </div>
					    <div className="col-lg-12">
					      <input type="submit" className="btn btn-defeault btn-send" defaultValue="Send message" />
					    </div>
					  </div>
					</form>
					</div>
				</div>
			)
		}
	}

	export default PostForm;