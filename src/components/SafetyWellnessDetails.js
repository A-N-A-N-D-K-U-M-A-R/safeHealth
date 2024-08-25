import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/SafetyWellnessDetails.css'; 
import HomeSafety from '../images/home_safety_image.png';
import Safety_hydrate from '../images/Safety_hydrate.jpg';

const topics = [
    {
        id: 1,
        title: 'Travel What are some common misconceptions about treating heat-related illnesses?',
        content: "Home Safety",
        image: HomeSafety,
    },
    {
        id: 2,
        title: 'Home Keep workers hydrated',
        content: content2,
        image: Safety_hydrate,
    },
];

const SafetyWellnessDetails = () => {
    const { id } = useParams();
    const topic = topics.find((topic) => topic.id === parseInt(id));

    if (!topic) {
        return <h2>Topic not found</h2>;
    }

    return (
        <div className="safetywellness-details-container">
            <h1>{topic.title}</h1>
            <img src={topic.image} alt={topic.title} />
            <p>{topic.content}</p>
        </div>
    );
};

export default SafetyWellnessDetails;
