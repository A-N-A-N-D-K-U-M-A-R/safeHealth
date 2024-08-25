
import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/BlogDetails.css';
const blogs = [
    {
        id: 1,
        title: 'Blog Title 1',
        content: 'This is the full content of Blog 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        image: '/path/to/blog-image1.jpg'
    },
    {
        id: 2,
        title: 'Blog Title 2',
        content: 'This is the full content of Blog 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        image: '/path/to/blog-image2.jpg'
    },
];

const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogs.find(blog => blog.id === parseInt(id));

    if (!blog) {
        return <h2>Blog not found</h2>;
    }

    return (
        <div className="blog-details-container">
            <h1>{blog.title}</h1>
            <img src={blog.image} alt={blog.title} />
            <p>{blog.content}</p>
        </div>
    );
};

export default BlogDetails;
