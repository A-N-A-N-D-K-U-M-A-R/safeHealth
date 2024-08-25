import React from 'react';
import { Link } from 'react-router-dom';
import '../css/SafetyWellness.css';
import HomeSafety from '../images/home_safety_image.png';
import TravelSafety from '../images/travel_safety.png';

const topics = [
    {
        id: 'HomeSafetyWellness',
        title: 'Home Safety.',
        description: 'Home safety refers to the awareness of risks and potential dangers within and around a home that may cause bodily harm, injury, or even death to its occupants. It involves identifying and mitigating hazards to create a safe living environment.',
        image: HomeSafety,
    },
    {
        id: 'TravelSafetyWellness',
        title: 'Travel Safety',
        description: 'Before embarking on a trip, it’s essential to prepare for emergencies and stay informed about potential safety concerns.',
        image: TravelSafety,
    },
];

const SafetyWellness = () => {
    return (
        <div className="safetywellness-container">
            <h1>Safety & Wellness</h1>
            <div className="topics-list">
                {topics.map((topic) => (
                    <Link to={`/safetywellness/${topic.id}`} className="topics-list">

                        <div className="topic-card" key={topic.id}>
                            <img src={topic.image} alt={topic.title} />
                            <h3>{topic.title}</h3>
                            <p>{topic.description}</p>
                            {/* <Link to={`/safetywellness/HomeSafetyWellness`} className="read-more">Read More</Link> */}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SafetyWellness;