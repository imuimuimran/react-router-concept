import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id, title, body} = post;

    const navigate = useNavigate();
    const handleNAvigate = () => {
        navigate (`/posts/${id}`);
    }

    const postStyle = {
        border: '2px, solid, blue',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }
    return (
        <div style={postStyle}>
            <h3>Post Title: {title}</h3>
            <p><small>Description: {body}</small></p>
            <Link to={`/posts/${id}`}>
                <button>Show Detaild</button>
            </Link>

            <button onClick={handleNAvigate}>Detail: {id}</button>
        </div>
    );
};

export default Post;