import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    const {id, title, body} = post
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h3>Post id: {id}</h3>
            <p>{body}</p>
            <small>{title}</small>
            <Link to={`/post/${id}`}>
                <button>
                    Details
                </button>
            </Link>
            <button onClick={handleNavigate}>
                Show More
            </button>
        </div>
    );
};

export default Post;