import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserCircle, FaHeart, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };
    return (
        <header style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', borderBottom: 'none', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ background: 'linear-gradient(135deg, #00d0b0 0%, #00b396 100%)', padding: '0.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 208, 176, 0.4)' }}>
                            <FaHome size={24} color="white" />
                        </div>
                        <span style={{ fontSize: '1.8rem', fontWeight: '800', color: 'white', letterSpacing: '-0.5px' }}>
                            Right<span style={{ color: '#00d0b0' }}>Place</span>
                        </span>
                    </Link>

                    <nav style={{ display: 'none', gap: '1.5rem', md: { display: 'flex' } }} className="desktop-nav">
                        <Link to="/" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.9)', fontWeight: '500', transition: 'color 0.2s' }}>Home</Link>
                        <Link to="/properties" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.9)', fontWeight: '500', transition: 'color 0.2s' }}>Properties</Link>
                        <Link to="/contact" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.9)', fontWeight: '500', transition: 'color 0.2s' }}>Contact Us</Link>
                    </nav>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <button className="btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: 'white', gap: '0.5rem' }}>
                        <FaHeart color="#00d0b0" /> <span style={{ display: 'none', md: { display: 'inline' } }}>Saved</span>
                    </button>
                    
                    {user ? (
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>
                                Welcome, {user.displayName || user.email}
                            </span>
                            <button 
                                onClick={handleLogout}
                                className="btn" 
                                style={{ 
                                    background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)', 
                                    border: 'none', 
                                    color: 'white', 
                                    gap: '0.5rem' 
                                }}
                            >
                                <FaSignOutAlt size={16} /> <span>Logout</span>
                            </button>
                        </div>
                    ) : (
                        <Link to="/signin">
                            <button className="btn" style={{ background: 'linear-gradient(135deg, #00d0b0 0%, #00b396 100%)', border: 'none', color: 'white', gap: '0.5rem' }}>
                                <FaUserCircle size={20} /> <span>Sign in</span>
                            </button>
                        </Link>
                    )}
                </div>
            </div>
            <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
        }
      `}</style>
        </header>
    );
};

export default Navbar;
