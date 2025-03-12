import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../service/common";

type Props = {
 
}

interface User {
    id: number;
    name : string;
}
export const AddPostComponent = ({}: Props) => {

    const [users, setUsers] = useState<User[]>([]);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
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
        const newPost = {
          title,
          author,
          content,
          userId: selectedUser,
        };
        axios.post(`${API_URL}/users`, newPost)
        .then(response => {
            console.log("RESPONSE:", response.data)
        })
        .catch(err => console.log(err.message))
        console.log(newPost);

      };

    
    return ( 
        <div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1">
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
        <label htmlFor="author">Author:</label>
        <input
          id="author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author"
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
        <button type="submit">Add Post</button>
      </form>
    </div>
    );
}