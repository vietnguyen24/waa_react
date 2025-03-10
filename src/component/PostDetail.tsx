import { Post } from "./Post";

type Props = {
 post: Post | null;
}
export const PostDetail = ({post}: Props) => {
    return ( 
        <div className="border-2 border-black w-200 h-50">
            <h1>{post?.title}</h1>
            <h3>{post?.author}</h3>
            <div className="p-5 text-left">
            <p>{post?.content}</p>
            </div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
}