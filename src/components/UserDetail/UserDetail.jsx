import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetail = () => {
    const user = useLoaderData();
    const {name, website, address} = user;
    const navigate = useNavigate();
    const usersDetailStyle = {
        border: '2px, solid, red',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }
    return (
        <div style={usersDetailStyle}>
            <h3>This is User Detail page</h3>
            <h3>Name: {name}</h3>
            <p>Website: {website}</p>
            <p>Address: {address.street}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default UserDetail;