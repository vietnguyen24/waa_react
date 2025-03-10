import {Post, PostComponent} from './Post'

type Props = {
  posts: Post[]
  handleClick: (post:Post) => void;

}
export const Posts: React.FC<Props> = ({ posts, handleClick }) => {
    return ( 
        <div className="grid grid-cols-3 gap-4 mx-auto">
      {posts.map((item) => (
        <PostComponent key={`post-${item.id}`}  handleClick={handleClick}  post={item}/>
      ))}
    </div>
    );
}