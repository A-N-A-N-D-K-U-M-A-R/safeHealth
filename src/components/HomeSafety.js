
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/SafetyWellness.css'; 
import safetyHeat from '../images/Safety_heat.jpg';
import Safety_hydrate from '../images/Safety_hydrate.jpg';

const topics = [
    {
        id: 1,
        title: 'First aid for heat.',
        description: 'What are some common misconceptions about treating heat-related illnesses?',
        image: safetyHeat,
    },
    {
        id: 2,
        title: 'Keep workers hydrated',
        description: 'Proper hydration is essential for preventing heat-related illnesses.',
        image: Safety_hydrate,
    },
];

const HomeSafety = () => {
    return (
        <div className="safetywellness-container">
            <h1>Home Safety & Wellness</h1>
            <div className="topics-list">
                {topics.map((topic) => (
                    <div className="topic-card" key={topic.id}>
                        <img src={topic.image} alt={topic.title} />
                        <h3>{topic.title}</h3>
                        <p>{topic.description}</p>
                        <Link to={`/safetywellness/HomeSafety/${topic.id}`} className="read-more">Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeSafety; 
