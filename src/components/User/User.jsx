import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UserMoreDetail from '../UserMoreDetail/UserMoreDetail';

const User = ({user}) => {
    const [showInfo, setShowInfo] = useState(false);
    const {id, name, email, phone} = user;
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json());

    const userStyle = {
        border: '2px solid yellow',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px',

    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>{email}</p>
            <p><small>{phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Show' : 'Hide'} Info</button>

            {
                showInfo && <Suspense fallback={<span>Loading...</span>}>
                    <UserMoreDetail userPromise={userPromise}></UserMoreDetail>
                </Suspense>
            }
        </div>
    );
};

export default User;