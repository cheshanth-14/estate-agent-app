import React from 'react';
import Select from 'react-select';
import { FaEnvelope, FaPhone, FaUser, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactPage = () => {
    return (
        <motion.div 
            className="container" 
            style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem', minHeight: '100vh', background: '#A4D8E1' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.h1 
                style={{ 
                    color: '#1a1a2e', 
                    marginBottom: '4rem', 
                    textAlign: 'center',
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: '900',
                    letterSpacing: '-0.02em',
                    background: 'linear-gradient(135deg, #1a1a2e 0%, #00d0b0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Let's Connect
            </motion.h1>

            {/* Contact Form Card */}
            <motion.div 
                className="card" 
                style={{ 
                    padding: '3rem', 
                    background: 'rgba(255, 255, 255, 0.95)', 
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 32px 64px rgba(0, 0, 0, 0.1)',
                    borderRadius: '24px',
                    marginBottom: '2rem'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <h2 style={{ textAlign: 'center', color: '#1a1a2e', marginBottom: '2.5rem', fontSize: '2rem', fontWeight: '700', letterSpacing: '-0.01em' }}>
                    Send us a Message
                </h2>
                <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message! We\'ll get back to you soon.'); }} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '600px', margin: '0 auto' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <label htmlFor="name" style={{ fontWeight: '600', color: '#1a1a2e', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name *</label>
                            <input 
                                type="text" 
                                id="name" 
                                required 
                                style={{ 
                                    padding: '1rem 1.25rem', 
                                    borderRadius: '16px', 
                                    border: '2px solid #e1e5e9',
                                    fontSize: '1rem',
                                    transition: 'all 0.3s ease',
                                    outline: 'none',
                                    width: '100%',
                                    boxSizing: 'border-box',
                                    background: 'rgba(255, 255, 255, 0.8)',
                                    backdropFilter: 'blur(10px)'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#00d0b0'}
                                onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <label htmlFor="email" style={{ fontWeight: '600', color: '#1a1a2e', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email *</label>
                            <input 
                                type="email" 
                                id="email" 
                                required 
                                style={{ 
                                    padding: '1rem 1.25rem', 
                                    borderRadius: '16px', 
                                    border: '2px solid #e1e5e9',
                                    fontSize: '1rem',
                                    transition: 'all 0.3s ease',
                                    outline: 'none',
                                    width: '100%',
                                    boxSizing: 'border-box',
                                    background: 'rgba(255, 255, 255, 0.8)',
                                    backdropFilter: 'blur(10px)'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#00d0b0'}
                                onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <label htmlFor="subject" style={{ fontWeight: '600', color: '#1a1a2e', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Subject</label>
                        <Select
                            options={[
                                { value: 'general', label: 'General Inquiry' },
                                { value: 'viewing', label: 'Book a Viewing' },
                                { value: 'valuation', label: 'Property Valuation' },
                                { value: 'feedback', label: 'Website Feedback' }
                            ]}
                            placeholder="Select Subject..."
                            styles={{
                                control: (base, state) => ({ 
                                    ...base, 
                                    borderColor: state.isFocused ? '#00d0b0' : '#e1e5e9',
                                    borderWidth: '2px',
                                    borderRadius: '16px', 
                                    padding: '0.5rem',
                                    boxShadow: 'none',
                                    minHeight: '56px',
                                    background: 'rgba(255, 255, 255, 0.8)',
                                    backdropFilter: 'blur(10px)',
                                    '&:hover': {
                                        borderColor: '#00d0b0'
                                    }
                                }),
                                option: (base, state) => ({
                                    ...base,
                                    backgroundColor: state.isSelected ? '#00d0b0' : state.isFocused ? 'rgba(0, 208, 176, 0.1)' : 'white',
                                    color: state.isSelected ? 'white' : '#333'
                                })
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <label htmlFor="message" style={{ fontWeight: '600', color: '#1a1a2e', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message *</label>
                        <textarea 
                            id="message" 
                            required 
                            rows="6" 
                            placeholder="Tell us how we can help you..."
                            style={{ 
                                padding: '1rem 1.25rem', 
                                borderRadius: '16px', 
                                border: '2px solid #e1e5e9', 
                                fontFamily: 'inherit', 
                                resize: 'vertical',
                                fontSize: '1rem',
                                transition: 'all 0.3s ease',
                                outline: 'none',
                                width: '100%',
                                boxSizing: 'border-box',
                                minHeight: '140px',
                                background: 'rgba(255, 255, 255, 0.8)',
                                backdropFilter: 'blur(10px)'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#00d0b0'}
                            onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                        ></textarea>
                    </div>

                    <motion.button 
                        type="submit" 
                        style={{ 
                            padding: '1.25rem 2rem', 
                            fontSize: '1rem', 
                            fontWeight: '600',
                            background: 'linear-gradient(135deg, #00d0b0 0%, #00b396 100%)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '16px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            width: '100%',
                            marginTop: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            boxShadow: '0 8px 24px rgba(0, 208, 176, 0.3)'
                        }}
                        whileHover={{ scale: 1.02, boxShadow: '0 12px 32px rgba(0, 208, 176, 0.4)' }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Send Message
                    </motion.button>
                </form>
            </motion.div>

            {/* Contact Info Card */}
            <motion.div 
                className="card" 
                style={{ 
                    padding: '3rem', 
                    background: 'rgba(26, 26, 46, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    marginBottom: '2rem',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '24px',
                    boxShadow: '0 32px 64px rgba(0, 0, 0, 0.2)'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '200px',
                    height: '200px',
                    background: 'linear-gradient(135deg, #00d0b0, rgba(0, 208, 176, 0.2))',
                    borderRadius: '50%',
                    opacity: 0.1,
                    filter: 'blur(40px)'
                }}></div>
                
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                        <div style={{ 
                            background: 'linear-gradient(135deg, #00d0b0 0%, #00b396 100%)', 
                            padding: '1.5rem', 
                            borderRadius: '50%', 
                            boxShadow: '0 8px 20px rgba(0, 208, 176, 0.4)' 
                        }}>
                            <FaUser size={32} color="white" />
                        </div>
                        <div>
                            <h2 style={{ margin: 0, fontSize: '2rem', fontWeight: '700', color: '#00d0b0' }}>J.Cheshanth</h2>
                            <span style={{ color: '#00d0b0', fontSize: '1.1rem', fontWeight: '500' }}>Senior Real Estate Agent</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                            <FaEnvelope size={20} color="#00d0b0" />
                            <a href="mailto:cheshanth@gmail.com" style={{ fontSize: '1.1rem', color: 'white', textDecoration: 'none', fontWeight: '500' }}>
                                cheshanth@gmail.com
                            </a>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                            <FaPhone size={20} color="#00d0b0" />
                            <a href="tel:+94765743454" style={{ fontSize: '1.1rem', color: 'white', textDecoration: 'none', fontWeight: '500' }}>
                                +94 765 743 454
                            </a>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                            <FaMapMarkerAlt size={20} color="#00d0b0" />
                            <span style={{ fontSize: '1.1rem', fontWeight: '500', color: 'white' }}>
                                Colombo, Sri Lanka
                            </span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                            <FaClock size={20} color="#00d0b0" />
                            <span style={{ fontSize: '1.1rem', fontWeight: '500', color: 'white' }}>
                                Mon - Fri: 9AM - 6PM
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Additional Info Section */}
            <motion.div 
                style={{ 
                    textAlign: 'center', 
                    padding: '3rem 2rem',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    marginTop: '2rem',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 32px 64px rgba(0, 0, 0, 0.1)'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <h3 style={{ color: '#1a1a2e', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>
                    Ready to Find Your Dream Home?
                </h3>
                <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
                    Whether you're buying, selling, or just exploring, I'm here to help you every step of the way. 
                    Let's make your real estate dreams a reality.
                </p>
                <motion.a 
                    href="/properties"
                    style={{
                        display: 'inline-block',
                        padding: '1rem 2rem',
                        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '50px',
                        fontWeight: '600',
                        fontSize: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        boxShadow: '0 8px 24px rgba(26, 26, 46, 0.3)'
                    }}
                    whileHover={{ scale: 1.05, boxShadow: '0 12px 32px rgba(26, 26, 46, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                >
                    Browse Properties
                </motion.a>
            </motion.div>
            
            <style>{`
                @media (max-width: 768px) {
                    .card > div {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                }
            `}</style>
        </motion.div>
    );
};

export default ContactPage;