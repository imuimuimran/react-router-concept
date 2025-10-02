import React, { use } from 'react';

const NewUsers = ({userPromise}) => {
    const users = use(userPromise);
    console.log(users);
    return (
        <div>
            <h3>This is new users page</h3>
        </div>
    );
};

export default NewUsers;