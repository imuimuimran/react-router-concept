import React, { use } from 'react';

const UserMoreDetail = ({userPromise}) => {
    const {name, username} = use(userPromise);
    const usersMoreDetailStyle = {
        border: '1px, solid, green',
        borderRadius: '20px',
        padding: '5px',
        margin: '5px'
    }
    return (
        <div style={usersMoreDetailStyle}>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
        </div>
    );
};

export default UserMoreDetail;