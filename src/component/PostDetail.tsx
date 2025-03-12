
import axios from "axios";
import { Post } from "./Post";
import { API_URL } from "../service/common";
import { useEffect, useState } from "react";


type Props = {
 id: Number|undefined;
 handleDelete: (id:number) => void
}
export const PostDetail = ({id, handleDelete}: Props) => {
    const [post, setPost] = useState<Post|null>(null);


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
                    setPost(null);
                    handleDelete(post.id);
                })
                .catch(err => console.log(err.message));
              console.log("handledelete " + post.id);
            }
          };


    return ( 
        <>
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
        </>
    );
}