import { useEffect, useState } from 'react';
import {Post, PostComponent} from './PostComponent'
import axios from 'axios';
import { API_URL } from '../service/common';
import { Link, useNavigate } from 'react-router-dom';
import { PostDetail } from './PostDetail';


type Props = {
  posts: Post[]
  handleClick: (post:Post) => void;

}
export const Posts: React.FC = () => {
    const navigate = useNavigate();
     const [postsState, setPostsState] = useState<Post[]>([]);
    const [title, setTitle] = useState("");


    
    
        useEffect(
            () => {
                axios.get(`${API_URL}/posts`)
                    .then(response => {
                        setPostsState(response.data)
                        console.log("RESPONSE:", response.data)
                    })
                    .catch(err => console.log(err.message))
            },
            []);


    // const changeName = () => {
    //     setPostsState(posts.map(p => p.id === 1 ? {...p, title:title} : p));
    // }

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    function handleClick(post: Post): void {
        navigate("/posts/");
    }

    const posts = postsState.map(post => {
        return (
            <Link to={`${post.id}`} key={post.id} >
                <PostComponent post={post}/>
            </Link>
        )
    });

    return ( <>
        <div className="grid grid-cols-3 gap-4   w-full max-w-screen">
      {posts}
      </div>
      <PostDetail/>



     {/* <label htmlFor="title">Title:</label>
            <input className="border-2 m-2" type="text" name="title" id="title"  value={title} onChange={onChangeTitle}  placeholder="Enter title"/>
            <button
             className="border-2 m-2 border-black bg-blue-500 text-black p-2 rounded"
              onClick={changeName}>Change Name</button> */}
       </>
    );
}