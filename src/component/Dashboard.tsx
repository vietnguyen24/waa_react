import React, { useEffect, useState } from "react";
import {Posts} from './Posts';
import { Post } from "./Post";
import { PostDetail } from "./PostDetail";
import axios from "axios";
import {API_URL} from "../service/common"
import { AddPostComponent, PostInput } from "./AddPostComponent";



// const initPosts: Post[] = [
//     { id: 1, title: "Post 1", author: "Author of Post 1", content: "Content 1" },
//     { id: 2, title: "Post 2", author: "Author of Post 2", content: "Content 2" },
//     { id: 3, title: "Post 3", author: "Author of Post 3", content: "Content 3" },
//     { id: 4, title: "Post 4", author: "Author of Post 4", content: "Content 4" },
//     { id: 5, title: "Post 5", author: "Author of Post 5", content: "Content 5" },
//     { id: 6, title: "Post 6", author: "Author of Post 6", content: "Content 6" },
//   ];

const Dashboard: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [title, setTitle] = useState("");
    const [postDetail, setPostDetail] = useState<Post | null >(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [refresh, setRefresh] = useState(0);


    useEffect(
        () => {
            axios.get(`${API_URL}/posts`)
                .then(response => {
                    setPosts(response.data)
                    console.log("RESPONSE:", response.data)
                })
                .catch(err => console.log(err.message))
        },
        [refresh]);


    const changeName = () => {
        setPosts(posts.map(p => p.id === 1 ? {...p, title:title} : p));
    }

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleClick = (post:Post) => {
        setPostDetail(post);
    }

    const handleDelete = (id: Number) => {
        setPosts(posts.filter(p => p.id !== id));
            setPostDetail(null);
        
    }

    function handleAddPost(): void {
        setShowAddForm(true);
    }

    function onSubmitPostForm(post: PostInput): void {
        setShowAddForm(false);
        setRefresh(prev => prev + 1);
    }

    return (<>
        <Posts posts={posts} handleClick={handleClick}/>
        <label htmlFor="title">Title:</label>
        <input className="border-2 m-2" type="text" name="title" id="title"  value={title} onChange={onChangeTitle}  placeholder="Enter title"/>
        <button
         className="border-2 m-2 border-black bg-blue-500 text-black p-2 rounded"
          onClick={changeName}>Change Name</button>
        <button
         className="border-2 m-2 border-black bg-blue-500 text-black p-2 rounded"
          onClick={handleAddPost}>Add Post</button>
          {showAddForm? <AddPostComponent handlePostSubmit={onSubmitPostForm}/> : ""}
        {postDetail? 
        <PostDetail id={postDetail.id} handleDelete={handleDelete}/>
          :""}


    </>  );
}

export default Dashboard;