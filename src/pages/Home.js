import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container home">
            <header className="home-header">
                <h1>Welcome to Safe Health Information</h1>
            </header>
            <section className="articles-section">
                <h2 className='headlines'>Latest Articles</h2>
                <div className="articles">
                    <div className="article-card">
                        {/* <img src={articleImage} alt="Article" /> */}
                        <h3>Article Title</h3>
                        <p>Brief description of the article...</p>
                        <Link to="/articles" className="read-more">Read More..</Link>
                    </div>
                    <div className="article-card">
                        {/* <img src={articleImage} alt="Article" /> */}
                        <h3>Article Title</h3>
                        <p>Brief description of the article...</p>
                        <Link to="/articles" className="read-more">Read More..</Link>
                    </div>
                </div>
            </section>
            <section className="safety-wellness-section">
                <h2>Safety and Wellness Topics</h2>
                <ul>
                    <li>
                        <h3>Home Safety</h3>
                        <Link to="/SafetyWellness/HomeSafetyWellness" className="safetywellness-read-more read-more">Read Guide</Link>
                    </li>
                    <li>
                        <h3>Travel Health</h3>
                        <Link to="/SafetyWellness/TravelSafetyWellness" className="safetywellness-read-more read-more">Read Guide</Link>
                    </li>
                </ul>
                {/* <Link to="/SafetyWellness" className="safetywellness-read-more read-more"><p>First aid for heat</p></Link>
                <Link to="/SafetyWellness" className="safetywellness-read-more read-more"><p>Keep workers hydrated</p></Link> */}
            </section>
            <section className="blogs-section">
                <h2 className='headlines'>Latest Blogs</h2>
                <div className="blog-cards">
                    <div className="blog-card">
                        <h3>Blog Title</h3>
                        <p>Brief description of the blog...</p>
                        <Link to="/blog" className="explore-blog">Read More..</Link>
                    </div>
                    <div className="blog-card">
                        <h3>Blog Title</h3>
                        <p>Brief description of the blog...</p>
                        <Link to="/blog" className="explore-blog">Read More..</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
