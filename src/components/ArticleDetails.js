

import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/ArticleDetails.css'; const articles = [
    {
        id: 1,
        title: 'Understanding Health and Wellness',
        content: 'Here is the full content of the article on health and wellness...',
        image: '/path/to/article1.jpg',
    },
    {
        id: 2,
        title: 'Top 10 Safety Tips for a Healthy Life',
        content: 'Here is the full content of the article on top 10 safety tips...',
        image: '/path/to/article2.jpg',
    },
    // Add more articles as needed
];

const ArticleDetails = () => {
    const { id } = useParams();
    const article = articles.find((article) => article.id === parseInt(id));

    if (!article) {
        return <h2>Article not found</h2>;
    }

    return (
        <div className="article-details-container">
            <h1>{article.title}</h1>
            <img src={article.image} alt={article.title} />
            <p>{article.content}</p>
        </div>
    );
};

export default ArticleDetails;
