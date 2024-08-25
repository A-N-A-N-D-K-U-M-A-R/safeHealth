import React, { useState, useEffect } from 'react';
import '../css/Resources.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const sampleResources = [
    {
        id: 1,
        type: 'Blog',
        title: 'How to Stay Healthy',
        link: '/blog/1',
    },
    {
        id: 2,
        type: 'Article',
        title: 'Understanding Mental Health',
        link: '/articles/2',
    },
    {
        id: 3,
        type: 'Safety',
        title: 'Workplace Safety Guidelines',
        link: '/safetywellness/3',
    },
];

const Resources = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        // Replace with actual data fetching logic
        setResources(sampleResources);
    }, []);

    return (
        <div>
            <Header/>
            <div className="resources-container">
            <h1>Resources</h1>
            <div className="resources-list">
                {resources.map((resource) => (
                    <div className="resource-card" key={resource.id}>
                        <h3>{resource.title}</h3>
                        <p>Type: {resource.type}</p>
                        <a href={resource.link} target="_blank" rel="noopener noreferrer" className="view-link">View Details</a>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Resources;
