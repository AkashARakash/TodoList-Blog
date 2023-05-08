import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import checkAuth from "../auth/checkAuth";
import Navbar from "../Navbar";
import PostListItem from "./PostListItem";

function ListPosts() {
    var [posts, setPosts]=useState([]);
    function fetchPosts(){
        axios.get('https://demo-blog.mashupstack.com/api/posts').then(response=>{
            setPosts(response.data)
        })

    }
    useEffect(()=>{
        fetchPosts()
    },[])

    return (<div>
        <Navbar></Navbar>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center my-4">Blog</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-8 offset-2">
                    <Link to="/blog/posts/create" className="btn btn-info mb-2">Create Post</Link>
                    {posts.map(post =><PostListItem key={post.id} post={post} refresh={fetchPosts}/>)}
                </div>
            </div>
        </div>
    </div>)
}

export default checkAuth(ListPosts);