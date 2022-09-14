import React, {useState} from 'react';
import MyInput from "./input/MyInput";
import MyButton from "./button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    const addNewPost = (e) =>{
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now(), date: new Date().toLocaleString()
        }
        create(newPost)
        setPost({
            title: '',
            body: '',
        })
    }

    return (
            <form>
                <MyInput
                    value={post.title}
                    onChange={e=>setPost({...post, title: e.target.value})}
                    type='text'
                    placeholder='Title'
                />
                <MyInput
                    value={post.body}
                    onChange={e=>setPost({...post, body: e.target.value})}
                    type='text'
                    placeholder='Text'
                />
                <MyButton onClick={addNewPost}>Send</MyButton>
            </form>
    );
};

export default PostForm;