
export interface Post {
    id: number;
    title: string;
    author: string;
    content: string;
  }

  type PostComponentProps = {
    post: Post;
    handleClick: (post:Post) => void;
  };

export const PostComponent = ({post, handleClick}: PostComponentProps) => {

    return ( 
        <div onClick={() => handleClick(post)} className="bg-blue-400 border-blue-950 border-2 font-light text-white p-2">
            <p>Id: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Author: {post.author}</p>
        </div>
    );
}

