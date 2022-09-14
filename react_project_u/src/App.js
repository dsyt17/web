import React, {useRef, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/UI/PostForm";


function App() {

    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'JavaScript',
            body: 'Джава скрипт это именно тот язык, который я сейчас изучаю',
            date: new Date().toLocaleString()
        },
        {
            id: 2,
            title: 'SQL',
            body: 'Джава скрипт это именно тот язык, который я сейчас изучаю',
            date: new Date().toLocaleString()
        },
        {
            id: 3,
            title: 'C++',
            body: 'Джава скрипт это именно тот язык, который я сейчас изучаю',
            date: new Date().toLocaleString()
        }
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            {posts.length !== 0
                ? <PostList remove={removePost} posts={posts} title={'All posts'}/>
                : <h1 style={{textAlign: 'center'}}>Posts not found!</h1>
            }
        </div>
    );
}

export default App;
