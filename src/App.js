import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blogs';
import BlogDetails from './components/BlogDetails';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import Resources from './pages/Resources';
import Articles from './pages/Articles';
import ArticleDetails from './components/ArticleDetails';
import SafetyWellness from './pages/SafetyWellness';
import HomeSafetyWellness from './pages/HomeSafetyWellness';
import TravelSafetyWellness from './pages/TravelSafetyWellness';
import HomeSafetyDetails from './components/HomeSafetyDetails';
import TravelSafetyDetails from './components/TravelSafetyDetails';
import Layout from './components/Layouts';



function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/articles/:id" element={<ArticleDetails />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogDetails />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/safetywellness" element={<SafetyWellness />} />
                    <Route path="/safetywellness/HomeSafety/:id" element={<HomeSafetyDetails />} />
                    <Route path="/safetywellness/HomeSafetyWellness" element={<HomeSafetyWellness />} />
                    <Route path="/safetywellness/TravelSafety/:id" element={<TravelSafetyDetails />} />
                    <Route path="/safetywellness/TravelSafetyWellness" element={<TravelSafetyWellness />} />
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="/resources" element={<Resources />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
