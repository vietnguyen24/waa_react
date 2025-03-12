import axios from "axios";
import { API_URL } from "./common";

export const findAllProduct = (result: (response: any) => void, resolve: (error: any) => void) => {
    axios.get(`${API_URL}/posts/`)
    .then(response => {
        result(response);
        // console.log("RESPONSE:", response.data)
    })
    .catch(err => resolve(err));
}