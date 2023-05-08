import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../Navbar";

function ViewPost() {
    var {postId} = useParams()
    var [post,setPost] = useState({title:'',content:''})
    useEffect(()=>{
        axios.get('https://demo-blog.mashupstack.com/api/posts/'+postId).then(response=>{
            setPost(response.data)
        })
    },[postId]);
    return <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header"><h3>{post.title}</h3></div>
                        <div className="card-body">{post.content}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ViewPost;