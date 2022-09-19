import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import '../styles/App.css'

const PostList = ({posts, title, remove}) => {

    const style = {textAlign: 'center', color: 'lemonchiffon'}

    if (!posts.length) {
        return (
            <h1 style={style}>
                Posts not found!
            </h1>
        )
    }

    return (
        <div>
            <div className="App">
                <h1
                    style={style}>
                    {title}
                </h1>
                <TransitionGroup>
                    {posts.map((post, index) =>
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames='post'
                        >
                            <PostItem remove={remove} number={index + 1} post={post} />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </div>
    );
};

export default PostList;