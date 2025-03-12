import { useState } from "react";
import { useNavigate, useParams } from "react-router";

export interface Post {
    id: number;
    title: string;
    author: string;
    content: string;
  }

  type PostComponentProps = {
    post: Post;
  };

export const PostComponent = ({post}: PostComponentProps) => {
    const navigate = useNavigate();
  function handleClick(post: Post): void {
    navigate("/posts/"+post.id);
  }

    return ( 
        <div onClick={() => handleClick(post)} className="bg-blue-400 border-blue-950 border-2 font-light text-white p-2">
            <p>Id: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Author: {post.author}</p>
        </div>
    );
}

