import { Link } from "react-router-dom";


type Props = {
 
}
export const NavComponent = ({}: Props) => {
    return ( 
        <div className="w-[100%]">
        <header className="bg-blue-300 m-5 w-[100%]">
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/add-post">Add Post</Link></li>
          </ul>
        </nav>
      </header>
      </div>
    );
}