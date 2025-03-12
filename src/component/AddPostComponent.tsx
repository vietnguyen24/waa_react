import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { API_URL } from "../service/common";



interface User {
    id: number;
    name : string;
}
export interface PostInput {
    title: string;
    userId: number;
    content: string;

}
export const AddPostComponent = () => {
    const fromRef = useRef<HTMLFormElement>(null);
    const [users, setUsers] = useState<User[]>([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [selectedUser, setSelectedUser] = useState<number | null>(null);

        useEffect(
            () => {
                axios.get(`${API_URL}/users`)
                    .then(response => {
                        setUsers(response.data)
                        console.log("RESPONSE:", response.data)
                    })
                    .catch(err => console.log(err.message))
            },
            []);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedUser === null) {
          console.error("User must be selected");
          return;
        }
        const newPost: PostInput = {
          title,
          content,
          userId: selectedUser,
        };
        axios.post(`${API_URL}/posts`, newPost)
        .then(response => {
            // handlePostSubmit(newPost);
            console.log("RESPONSE:", response.data)
        })
        .catch(err => console.log(err.message))
        console.log(newPost);

      };

    
    return ( 
        <div  className=" w-max">
      <form onSubmit={handleSubmit} ref={fromRef} className="grid grid-cols-2">
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter content"
        />
        <label htmlFor="user">User:</label>
        <select
          id="user"
          name="user"
          value={selectedUser ?? ""}
          onChange={(e) => setSelectedUser(Number(e.target.value))}
        >
          <option value="" disabled>
            Select a user
          </option>
          {users.map((user) => (
            <option key={`user_${user.id}`} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </form>
      <button onClick={() => {fromRef.current && fromRef.current.requestSubmit()}}>Add</button>
    </div>
    );
}