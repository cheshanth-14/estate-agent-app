import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHome, FaKey, FaHandHoldingUsd } from 'react-icons/fa';

const HomePage = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <div className="hero-section" style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/img/hero_bg.jpg")',
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
            }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '800', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', color: '#fff' }}>
                    Find Your Dream Home
                </h1>
                <p style={{ fontSize: '1.4rem', marginBottom: '2.5rem', maxWidth: '700px', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                    Browse our exclusive collection of properties and find the perfect place to live.
                </p>
                <Link to="/properties" className="btn btn-accent" style={{
                    fontSize: '1.25rem',
                    padding: '1rem 3rem',
                    gap: '0.75rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontWeight: '700',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                    transform: 'scale(1)',
                    transition: 'transform 0.2s',
                    borderRadius: '50px'
                }}>
                    <FaSearch /> Start Your Search
                </Link>
            </div>

            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '3rem' }}>Everything you need</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', textAlign: 'left' }}>
                    <div className="card feature-card" style={{ padding: '2.5rem', transition: 'all 0.3s ease', position: 'relative' }}>
                        <div style={{ background: 'linear-gradient(135deg, #00d0b0 0%, #009b82 100%)', width: '70px', height: '70px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 4px 15px rgba(0, 208, 176, 0.4)' }}>
                            <FaHome size={32} color="white" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>Buy a Home</h3>
                        <p style={{ color: 'var(--text-main)', lineHeight: '1.6' }}>
                            Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.
                        </p>
                        <Link to="/properties" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--accent)', fontWeight: '600', textDecoration: 'none' }}>
                            Browse Homes &rarr;
                        </Link>
                    </div>

                    <div className="card feature-card" style={{ padding: '2.5rem', transition: 'all 0.3s ease', position: 'relative' }}>
                        <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', width: '70px', height: '70px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)' }}>
                            <FaHandHoldingUsd size={32} color="white" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>Sell a Home</h3>
                        <p style={{ color: 'var(--text-main)', lineHeight: '1.6' }}>
                            No matter what path you take to sell your home, we can help you navigate a successful sale with confidence.
                        </p>
                        <span style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--text-light)', fontWeight: '500' }}>
                            Coming Soon
                        </span>
                    </div>

                    <div className="card feature-card" style={{ padding: '2.5rem', transition: 'all 0.3s ease', position: 'relative' }}>
                        <div style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', width: '70px', height: '70px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 4px 15px rgba(245, 87, 108, 0.4)' }}>
                            <FaKey size={32} color="white" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>Rent a Home</h3>
                        <p style={{ color: 'var(--text-main)', lineHeight: '1.6' }}>
                            We're creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.
                        </p>
                        <Link to="/properties" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--accent)', fontWeight: '600', textDecoration: 'none' }}>
                            Find Rentals &rarr;
                        </Link>
                    </div>
                </div>
            </div>
            <style>{`
                .feature-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                }
                .feature-card::before {
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
                .feature-card:hover::before {
                    opacity: 1;
                }
                .btn-accent:hover {
                    transform: scale(1.05) !important;
                }
            `}</style>
        </div>
    );
};

export default HomePage;
