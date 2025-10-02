import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetail = () => {
    const user = useLoaderData();
    const {name, website, address} = user;
    return (
        <div>
            <h3>This is User Detail page</h3>
            <h3>Name: {name}</h3>
            <p>Website: {website}</p>
            <p>Address: {address.street}</p>
        </div>
    );
};

export default UserDetail;