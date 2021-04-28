import React from 'react';
import { connect } from 'react-redux';
import { SyncLoader } from 'react-spinners'; 
import { fetchPost } from '../redux/actions/postsAction';


const Blog = (props) => {
    console.log(props);

    const cargarPosts = () => {
        props.dispatch(
            fetchPost()
        );
    }

    return (
        <div>
            <h1>Nuevas entradas de blog</h1>
            <button onClick={cargarPosts}>
                Cargar Posts
            </button>
            <br/>
            {props.blog.isFetching
                ? <SyncLoader/>
                : (
                    <ul>
                        {props.blog.posts.map(post => (
                            <li key={post.id}>
                                {post.title}
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
}

export default connect((state) => {
    return state;
})(Blog);