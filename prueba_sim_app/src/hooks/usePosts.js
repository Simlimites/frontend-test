import axios from "axios";
import { useDispatch } from "react-redux";
import { postUpdated, postsLoad } from "../store/postSlice";

const usePosts = () => {
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    const api = axios.create({ baseURL: `${BASE_URL}` });
    const dispatch = useDispatch();

    const fetchPosts = async() => {
        const resp = await api.get('/posts');
        
        return dispatch(
            postsLoad(resp.data),
        )
    }

    const editPost = async(post) => {
        return dispatch(
            postUpdated(post)
        )
    }

    return {
        fetchPosts,
        editPost
    }
}

export default usePosts;