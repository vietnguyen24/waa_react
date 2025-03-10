import React, { useState } from "react";
import {Posts} from './Posts';
import { Post } from "./Post";
import { PostDetail } from "./PostDetail";

const initPosts: Post[] = [
    { id: 1, title: "Post 1", author: "Author of Post 1", content: "Content 1" },
    { id: 2, title: "Post 2", author: "Author of Post 2", content: "Content 2" },
    { id: 3, title: "Post 3", author: "Author of Post 3", content: "Content 3" },
    { id: 4, title: "Post 4", author: "Author of Post 4", content: "Content 4" },
    { id: 5, title: "Post 5", author: "Author of Post 5", content: "Content 5" },
    { id: 6, title: "Post 6", author: "Author of Post 6", content: "Content 6" },
  ];

const Dashboard: React.FC = () => {
    const [posts, setPosts] = useState(initPosts);
    const [title, setTitle] = useState("");
    const [postDetail, setPostDetail] = useState<Post | null >(null);

    const changeName = () => {
        setPosts(posts.map(p => p.id === 1 ? {...p, title:title} : p));
    }

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleClick = (post:Post) => {
        setPostDetail(post);
    }

    return (<>
        <Posts posts={posts} handleClick={handleClick}/>
        <label htmlFor="title">Title:</label>
        <input className="border-2 m-2" type="text" name="title" id="title"  value={title} onChange={onChangeTitle}  placeholder="Enter title"/>
        <button
         className="border-2 m-2 border-black bg-blue-500 text-black p-2 rounded"
          onClick={changeName}>Change Name</button>

        <PostDetail post={postDetail}/>
          

    </>  );
}

export default Dashboard;