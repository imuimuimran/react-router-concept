import React, { useState } from 'react';
import { Navigate } from 'react-router';

const Home = () => {
    const [goUsersPage, setUsersGoPage] = useState(false);


    if(goUsersPage){
        return <Navigate to='/users'></Navigate>
    }
    return (
        <div>
            <h2>This is home</h2>
            <button onClick={() => setUsersGoPage(true)}>Go Users Page</button>
        </div>
    );
};

export default Home;