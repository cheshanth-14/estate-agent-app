import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserCircle, FaHeart, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await logout();
            setIsMenuOpen(false);
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <>
            <style>{`
                @media (min-width: 768px) {
                    .desktop-nav { display: flex !important; }
                    .desktop-auth { display: block !important; }
                    .mobile-menu-btn { display: none !important; }
                    .user-welcome { display: inline !important; }
                }
                @media (max-width: 767px) {
                    .container { padding: 0 0.5rem !important; }
                    .desktop-nav { display: none !important; }
                    .desktop-auth { display: none !important; }
                }
                .nav-link {
                    position: relative;
                    overflow: hidden;
                }
                .nav-link::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transition: left 0.5s;
                }
                .nav-link:hover::before {
                    left: 100%;
                }
                .nav-link:hover {
                    background: rgba(0, 208, 176, 0.2);
                    color: #00d0b0 !important;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 8px rgba(0, 208, 176, 0.3);
                }
                .mobile-nav-link:hover {
                    background: rgba(0, 208, 176, 0.2) !important;
                    border-color: #00d0b0 !important;
                    transform: translateX(5px);
                }
            `}</style>
            <header style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', borderBottom: 'none', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)', width: '100%', overflowX: 'hidden' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px', padding: '0 1rem', maxWidth: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ background: 'linear-gradient(135deg, #00d0b0 0%, #00b396 100%)', padding: '0.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 208, 176, 0.4)' }}>
                                <FaHome size={24} color="white" />
                            </div>
                            <span style={{ fontSize: '1.8rem', fontWeight: '800', color: 'white', letterSpacing: '-0.5px' }}>
                                Right<span style={{ color: '#00d0b0' }}>Place</span>
                            </span>
                        </Link>

                        <nav style={{ display: 'none', gap: '1.5rem' }} className="desktop-nav">
                            <Link to="/" className="nav-link" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.9)', fontWeight: '500', transition: 'all 0.3s ease', padding: '0.5rem 1rem', borderRadius: '8px', position: 'relative' }}>Home</Link>
                            <Link to="/properties" className="nav-link" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.9)', fontWeight: '500', transition: 'all 0.3s ease', padding: '0.5rem 1rem', borderRadius: '8px', position: 'relative' }}>Properties</Link>
                            <Link to="/contact" className="nav-link" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.9)', fontWeight: '500', transition: 'all 0.3s ease', padding: '0.5rem 1rem', borderRadius: '8px', position: 'relative' }}>Contact Us</Link>
                        </nav>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div className="desktop-auth" style={{ display: 'none' }}>
                            {user ? (
                                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                                    <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.8rem', display: 'none' }} className="user-welcome">
                                        Welcome, {user.displayName || user.email}
                                    </span>
                                    <button 
                                        onClick={handleLogout}
                                        className="btn" 
                                        style={{ 
                                            background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)', 
                                            border: 'none', 
                                            color: 'white', 
                                            gap: '0.5rem',
                                            padding: '0.5rem 0.75rem',
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        <FaSignOutAlt size={14} /> <span>Logout</span>
                                    </button>
                                </div>
                            ) : (
                                <Link to="/signin">
                                    <button className="btn" style={{ background: 'linear-gradient(135deg, #00d0b0 0%, #00b396 100%)', border: 'none', color: 'white', gap: '0.5rem', padding: '0.5rem 0.75rem', fontSize: '0.9rem' }}>
                                        <FaUserCircle size={18} /> <span>Sign in</span>
                                    </button>
                                </Link>
                            )}
                        </div>

                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="mobile-menu-btn"
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                display: 'block'
                            }}
                        >
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="mobile-menu" style={{
                        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        padding: '1rem'
                    }}>
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <Link 
                                to="/" 
                                onClick={() => setIsMenuOpen(false)}
                                className="mobile-nav-link"
                                style={{ 
                                    textDecoration: 'none', 
                                    color: 'rgba(255,255,255,0.9)', 
                                    fontWeight: '500', 
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Home
                            </Link>
                            <Link 
                                to="/properties" 
                                onClick={() => setIsMenuOpen(false)}
                                className="mobile-nav-link"
                                style={{ 
                                    textDecoration: 'none', 
                                    color: 'rgba(255,255,255,0.9)', 
                                    fontWeight: '500', 
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Properties
                            </Link>
                            <Link 
                                to="/contact" 
                                onClick={() => setIsMenuOpen(false)}
                                className="mobile-nav-link"
                                style={{ 
                                    textDecoration: 'none', 
                                    color: 'rgba(255,255,255,0.9)', 
                                    fontWeight: '500', 
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Contact Us
                            </Link>
                            
                            <div style={{ padding: '1rem 0' }}>
                                {user ? (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                                            Welcome, {user.displayName || user.email}
                                        </span>
                                        <button 
                                            onClick={handleLogout}
                                            className="btn" 
                                            style={{ 
                                                background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)', 
                                                border: 'none', 
                                                color: 'white', 
                                                gap: '0.5rem',
                                                padding: '0.75rem',
                                                width: '100%',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <FaSignOutAlt size={16} /> <span>Logout</span>
                                        </button>
                                    </div>
                                ) : (
                                    <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                                        <button className="btn" style={{ 
                                            background: 'linear-gradient(135deg, #00d0b0 0%, #00b396 100%)', 
                                            border: 'none', 
                                            color: 'white', 
                                            gap: '0.5rem', 
                                            padding: '0.75rem',
                                            width: '100%',
                                            justifyContent: 'center'
                                        }}>
                                            <FaUserCircle size={18} /> <span>Sign in</span>
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
};

export default Navbar;