import React from 'react';
import '../css/Blog.css';
import { Link } from 'react-router-dom';

const blogs = [
    {
        id: 1,
        title: 'Blog Title 1',
        description: 'This is a brief description of Blog 1.',
        image: '/path/to/blog-image1.jpg'
    },
    {
        id: 2,
        title: 'Blog Title 2',
        description: 'This is a brief description of Blog 2.',
        image: '/path/to/blog-image2.jpg'
    },
];


const Blog = () => {
    return (
        <div className="blog-container">
            <h1>Latest Blogs</h1>
            <div className="blog-list">
                {blogs.map((blog) => (
                    <div className="blog-card" key={blog.id}>
                        <img src={blog.image} alt={blog.title} />
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                        <Link to={`/blog/${blog.id}`} className="read-more">Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
