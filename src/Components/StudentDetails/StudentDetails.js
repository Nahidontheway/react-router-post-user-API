import React from 'react';
import { useLoaderData } from 'react-router-dom';

const StudentDetails = () => {
    const student = useLoaderData();
    console.log(student);
    return (
        <div>
            <h1>Details of Friends!</h1>
            <p>Name: {student.name}</p>
            <small>Email: {student.email}</small>
        </div>
    );
};

export default StudentDetails;