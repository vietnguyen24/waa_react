
import axios from "axios";

import { API_URL } from "../service/common";
import { useEffect, useState } from "react";
import { Post } from "./PostComponent";
import { useParams } from "react-router";



export const PostDetail = () => {
    const [post, setPost] = useState<Post|null>(null);
    const params = useParams();
    const id = params.id;

    useEffect(
        () => {
            if (id)  {
            axios.get(`${API_URL}/posts/${id}`)
                .then(response => {
                    setPost(response.data)
                    console.log("RESPONSE:", response.data)
                })
                .catch(err => console.log(err.message))
            }
        },[id]);

        const handleDeleteClick = () => {
            
            if (post) {
                axios.delete(`${API_URL}/posts/${id}`)
                .then(response => {
                    console.log("RESPONSE:", response.data)
                    // setPosts(posts.filter(p => p.id !== postDetail?.id));
                    // setPostDetail(null);
                })
                .catch(err => console.log(err.message));

            //   handleDelete(post.id);
              console.log("handledelete " + post.id);
            }
          };


    return ( 
        <div className="m-10">
        {post? 
        <div className="border-2 border-black w-200 h-50">
            <h1>{post.title}</h1>
            <h3>{post.author}</h3>
            <div className="p-5 text-left">
            <p>{post.content}</p>
            </div>
            <button >Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
        : <p>No Data</p>}
        </div>
    );
}