import React, {Component} from 'react';
import axios from 'axios';

class PostForm extends Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		post: {}
	// 	}
	// }

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
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}

		render(){
			return(
				<form encType="multipart/form-data" onSubmit={(e) => this.createPost(e)}>
				  <div className="row">
				    <div className="col-lg-12">
				      <div className="form-group">
				        <input ref={(input) => this.title = input} type="text" className="form-control" name="title" id="title" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
				        <div className="validation" />
				      </div>
				    </div>
				    <div className="col-lg-12">
				        <textarea ref={(input) => this.content = input} className="form-control" name="content" rows={12} data-rule="required" data-msg="Please write something for us" placeholder="content" defaultValue={""} />
				        <div className="validation" />
				    </div>
				    <div className="col-lg-12">
				        <input type="file" ref="file" className="form-control" name="file" rows={12} data-rule="required" />
				        <div className="validation" />
				    </div>
				    <div className="col-lg-12">
				      <input type="submit" className="btn btn-defeault btn-send" defaultValue="Send message" />
				    </div>
				  </div>
				</form>
			)
		}
	}

	export default PostForm;