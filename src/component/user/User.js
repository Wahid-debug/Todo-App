import React, { useEffect } from 'react';
import axios from 'axios';

const User = () => {

    useEffect(() => {
        const data = axios.get(`https://reqres.in/api/users`).then((response) => {
            console.log(data);
        });

    }, [])
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default User;
