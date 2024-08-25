import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Articles.css'; 

const articles = [
    {
        id: 1,
        title: 'Understanding Health and Wellness',
        description: 'A brief overview of the importance of maintaining health and wellness.',
        image: '/path/to/article1.jpg',
    },
    {
        id: 2,
        title: 'Top 10 Safety Tips for a Healthy Life',
        description: 'Discover the top safety tips for ensuring a long, healthy life.',
        image: '/path/to/article2.jpg',
    },
];

const Articles = () => {
    return (
        <div className="articles-container">
            <h1>Our Articles</h1>
            <div className="articles-list">
                {articles.map((article) => (
                    <div className="article-card" key={article.id}>
                        <img src={article.image} alt={article.title} />
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <Link to={`/articles/${article.id}`} className="read-more">Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Articles;
