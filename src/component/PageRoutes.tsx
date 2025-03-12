import { Route, Routes, Navigate } from "react-router";
import { Posts } from "./Posts";
import { PostDetail } from "./PostDetail";
import { AddPostComponent, PostInput } from "./AddPostComponent";



export default function PageRoutes() {
    return (
        <Routes>
                <Route path="/" element={<Navigate replace to="/posts" />} />
                <Route path="posts" element={<Posts/>}>
                    <Route path=":id" element={<PostDetail/>} />
                </Route>
            <Route path="add-post" element={<AddPostComponent/>} />
        </Routes>
    );
}


{/* <Routes>
<Route path="products" element={<Products />}>
    <Route path=":id" element={<ProductDetails />} />
</Route>

<Route path="create-product" element={<NewProductHook />} />
</Routes> */}