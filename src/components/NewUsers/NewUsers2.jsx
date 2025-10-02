import React, { use } from 'react';

const NewUsers2 = ({newUserPromise}) => {
    const users = use(newUserPromise);
    console.log(users);
    return (
        <div>
            <h3>This is New Users Page 2</h3>
        </div>
    );
};

export default NewUsers2;