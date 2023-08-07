import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm';
import usePosts from '../hooks/usePosts';

const PostEdit = ({ post }) => {
    const { editPost } = usePosts();
    const [ formValues, handleInputChange, reset ] = useForm(post);
    

    const { title, body } = formValues;

    const handlerSubmit = (e) => {
        e.preventDefault();
        editPost({ id: post.id, post: {
            ...post,
            title: e.target.title.value,
            body: e.target.body.value
        }})
    }

    useEffect(() => {
        reset()
    }, [post])
    
  return (
    <form onSubmit={ handlerSubmit }>
        <div className="mb-3">
            <label className="form-label">Title</label>
            <input 
                type="text" 
                className="form-control" 
                id="title" 
                name="title" 
                value={ title }
                onChange={ handleInputChange }
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Body</label>
            <textarea 
                className="form-control" 
                id="body" 
                rows="5"
                name="body"
                value={ body }
                onChange={ handleInputChange }
                
            ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
    </form>
  )
}

export default PostEdit