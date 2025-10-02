import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetail = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {title, body} = post;
    const postDetailStyle = {
        border: '2px, solid, red',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }
    return (
        <div style={postDetailStyle}>
            <h2>Post Title: {title}</h2>
            <p>Post Body: {body}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetail;