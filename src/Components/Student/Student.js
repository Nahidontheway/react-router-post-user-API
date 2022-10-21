import React from 'react';
import { Link } from 'react-router-dom';

const Student = ({student}) => {
    const {id, name, email, username} = student
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
            <small>User Name: <Link to={`/student/${id}`}>{username}</Link></small>
        </div>
    );
};

export default Student;