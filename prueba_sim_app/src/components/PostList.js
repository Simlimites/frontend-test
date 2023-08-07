import React, { useState } from 'react'
import PostEdit from './PostEdit';
import { useSelector } from 'react-redux';


const PostList = () => {
    const {posts} = useSelector( state => state.posts );
    const [editingPost, setEditingPosts] = useState({ title: '', body: ''});
    const handlerEditPosts = (item) => {
        setEditingPosts(item);
    }

    return (
        <div className='container p-5'>
            <h1 className='h1 mb-5'>Posts App</h1>
            <div className='row align-items-start'>
                <div className="col">
                    { posts.map(item => (
                       <div className="card mb-3" key={item.id}>
                        <div className="card-body">
                            <h5 className="card-title">{ item.title }</h5>
                            <p className="card-text">{ item.body }</p>
                            <a 
                                href="#" 
                                className="card-link"
                                onClick={ () => handlerEditPosts(item) }
                            >Edit</a>
                        </div>
                        </div>
                    ))}

                </div>
                <div className="col">
                   <PostEdit post={ editingPost } />
                </div>

            </div>
        </div>
    )
}

export default PostList;