import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Student from '../Student/Student';

const Success = () => {
    const success = useLoaderData();
    console.log(success);
    return (
        <div>
            <h1>Hello from Success!{success.length}</h1>
            {
                success.map(student=> <Student key={student.id} student={student}></Student>)
            }
        </div>
    );
};

export default Success;