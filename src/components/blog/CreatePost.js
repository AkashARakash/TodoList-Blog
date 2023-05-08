import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    var navigate = useNavigate()
    function addPost() {
        axios.post('https://demo-blog.mashupstack.com/api/posts',{
            title: title,
            content: content
        }).then(response=>{
            navigate('/blog/posts')
        })
    }
    return (<div>
        <Navbar></Navbar>
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className="text-center">Create Post</h1>
                    <div className="form-group">
                        <label>Title:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={title} 
                        onChange={(event)=>{setTitle(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Content:</label>
                        <textarea 
                        className="form-control" 
                        value={content} 
                        onChange={(event)=>{setContent(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={addPost}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default CreatePost;