import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchPage from './pages/SearchPage';
import PropertyPage from './pages/PropertyPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import SignInPage from './pages/SignInPage';
import RegisterPage from './pages/RegisterPage';
import { FavoritesProvider } from './context/FavoritesContext';
import { AuthProvider } from './context/AuthContext';

function App() {
    return (
        <AuthProvider>
            <FavoritesProvider>
                <Router basename="/estate-agent-app">
                    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <Navbar />
                        <main style={{ flex: 1, padding: '1rem 0.5rem', maxWidth: '1400px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/properties" element={<SearchPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="/property/:id" element={<PropertyPage />} />
                                <Route path="/signin" element={<SignInPage />} />
                                <Route path="/register" element={<RegisterPage />} />
                            </Routes>
                        </main>
                    <footer style={{
                        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                        textAlign: 'center',
                        padding: '2rem 1rem',
                        color: 'rgba(255,255,255,0.8)',
                        marginTop: 'auto'
                    }}>
                        <div style={{ marginBottom: '1rem' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>
                                Right<span style={{ color: '#00d0b0' }}>Place</span>
                            </span>
                        </div>
                        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>
                            &copy; 2025 All rights to cheshanth(w2120641)
                        </p>
                        <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
                            Your trusted partner in finding the perfect home
                        </p>
                    </footer>
                </div>
            </Router>
        </FavoritesProvider>
    </AuthProvider>
    );
}

export default App;
