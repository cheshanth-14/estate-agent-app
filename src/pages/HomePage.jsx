import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHome, FaKey, FaHandHoldingUsd } from 'react-icons/fa';
import { motion } from 'framer-motion';
import heroBg from '../assets/img/hero_bg.jpg';

const HomePage = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Force animation trigger on mount
        setIsLoaded(true);
    }, []);

    return (
        <motion.div 
            className="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Hero Section */}
            <motion.div 
                className="hero-section" 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity:  isLoaded ? 1 :  0, y: isLoaded ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '70vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    textAlign: 'center',
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '4rem',
                    boxShadow: 'var(--shadow-lg)'
                }}
            >
                <motion.h1 
                    initial={{ opacity: 0, y:  30 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ fontSize: '3. 5rem', marginBottom: '1.5rem', fontWeight: '800', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', color: '#fff' }}
                >
                    Find Your Dream Home
                </motion. h1>
                <motion. p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{ fontSize: '1.4rem', marginBottom: '2.5rem', maxWidth: '700px', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                >
                    Browse our exclusive collection of properties and find the perfect place to live. 
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
                    transition={{ duration:  0.6, delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link to="/properties" className="btn btn-accent" style={{
                        fontSize: '1.25rem',
                        padding: '1rem 3rem',
                        gap: '0.75rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontWeight: '700',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                        borderRadius: '50px'
                    }}>
                        <FaSearch /> Start Your Search
                    </Link>
                </motion.div>
            </motion.div>

            <div className="container" style={{ textAlign: 'center' }}>
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '3rem' }}
                >
                    Everything you need
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', textAlign: 'left', alignItems: 'stretch' }}>
                    <motion.div 
                        className="card feature-card" 
                        initial={{ opacity:  0, y: 50 }}
                        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        style={{ padding: '2.5rem', position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}
                    >
                        <div style={{ background: 'linear-gradient(135deg, #00d0b0 0%, #009b82 100%)', width: '70px', height: '70px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <FaHome size={32} color="white" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>Buy a Home</h3>
                        <p style={{ color: 'var(--text-main)', lineHeight: '1.6' }}>
                            Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.
                        </p>
                        <Link to="/properties" style={{ display:  'inline-block', marginTop: '1rem', color: 'var(--accent)', fontWeight: '600', textDecoration: 'none' }}>
                            Browse Homes &rarr;
                        </Link>
                    </motion.div>

                    <motion.div 
                        className="card feature-card" 
                        initial={{ opacity: 0, y:  50 }}
                        animate={{ opacity: isLoaded ? 1 : 0, y:  isLoaded ? 0 :  50 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        style={{ padding: '2.5rem', position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}
                    >
                        <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', width: '70px', height: '70px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom:  '1.5rem' }}>
                            <FaHandHoldingUsd size={32} color="white" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>Sell a Home</h3>
                        <p style={{ color: 'var(--text-main)', lineHeight: '1.6' }}>
                            No matter what path you take to sell your home, we can help you navigate a successful sale with confidence.
                        </p>
                        <span style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--text-light)', fontWeight: '500' }}>
                            Coming Soon
                        </span>
                    </motion.div>

                    <motion.div 
                        className="card feature-card" 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                        whileHover={{ y:  -8, transition: { duration:  0.3 } }}
                        style={{ padding: '2.5rem', position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}
                    >
                        <div style={{ background:  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', width: '70px', height: '70px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom:  '1.5rem' }}>
                            <FaKey size={32} color="white" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>Rent a Home</h3>
                        <p style={{ color:  'var(--text-main)', lineHeight: '1.6' }}>
                            We're creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.
                        </p>
                        <Link to="/properties" style={{ display:  'inline-block', marginTop: '1rem', color: 'var(--accent)', fontWeight: '600', textDecoration:  'none' }}>
                            Find Rentals &rarr;
                        </Link>
                    </motion.div>
                </div>
            </div>
            <style>{`
                .feature-card:: before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #00d0b0, #667eea, #f5576c);
                    border-radius: 16px 16px 0 0;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                . feature-card:hover::before {
                    opacity: 1;
                }
            `}</style>
        </motion.div>
    );
};

export default HomePage;