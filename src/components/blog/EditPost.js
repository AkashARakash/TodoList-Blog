import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";

function EditPost() {
    const {postId} = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    useEffect(()=>{
        axios.get('https://demo-blog.mashupstack.com/api/posts/'+postId).then(response=>{
            setTitle(response.data.title);
            setContent(response.data.content);
        })
    },[postId]);
    function updatePost(){
        axios.post('https://demo-blog.mashupstack.com/api/posts/'+postId,{
            title: title,
            content: content
        }).then(response=>{
            alert(response.data.message)
        })
    }
    return <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className="text-center">Edit Post</h1>
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
                        <button className="btn btn-primary float-right" onClick={updatePost}>Submit</button>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
}

export default EditPost;