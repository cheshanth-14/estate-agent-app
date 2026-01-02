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
                    color: 'var(--primary)', 
                    marginBottom: '3rem', 
                    textAlign: 'center',
                    fontSize: '3rem',
                    fontWeight: '800'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Get In Touch
            </motion.h1>

            {/* Contact Form Card */}
            <motion.div 
                className="card" 
                style={{ 
                    padding: '4rem', 
                    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', 
                    color: 'white',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    marginBottom: '3rem'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <h2 style={{ textAlign: 'center', color: 'white', marginBottom: '3rem', fontSize: '2.5rem', fontWeight: '700' }}>
                    Send us a Message
                </h2>
                <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message! We\'ll get back to you soon.'); }} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '600px', margin: '0 auto' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <label htmlFor="name" style={{ fontWeight: '600', color: 'white', fontSize: '1rem' }}>Name *</label>
                            <input 
                                type="text" 
                                id="name" 
                                required 
                                style={{ 
                                    padding: '1rem', 
                                    borderRadius: '12px', 
                                    border: '2px solid #e1e5e9',
                                    fontSize: '1rem',
                                    transition: 'border-color 0.3s ease',
                                    outline: 'none',
                                    width: '100%',
                                    boxSizing: 'border-box'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#00d0b0'}
                                onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <label htmlFor="email" style={{ fontWeight: '600', color: 'white', fontSize: '1rem' }}>Email *</label>
                            <input 
                                type="email" 
                                id="email" 
                                required 
                                style={{ 
                                    padding: '1rem', 
                                    borderRadius: '12px', 
                                    border: '2px solid #e1e5e9',
                                    fontSize: '1rem',
                                    transition: 'border-color 0.3s ease',
                                    outline: 'none',
                                    width: '100%',
                                    boxSizing: 'border-box'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#00d0b0'}
                                onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <label htmlFor="subject" style={{ fontWeight: '600', color: 'white', fontSize: '1rem' }}>Subject</label>
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
                                    borderRadius: '12px', 
                                    padding: '0.5rem',
                                    boxShadow: 'none',
                                    minHeight: '56px',
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
                        <label htmlFor="message" style={{ fontWeight: '600', color: 'white', fontSize: '1rem' }}>Message *</label>
                        <textarea 
                            id="message" 
                            required 
                            rows="6" 
                            placeholder="Tell us how we can help you..."
                            style={{ 
                                padding: '1rem', 
                                borderRadius: '12px', 
                                border: '2px solid #e1e5e9', 
                                fontFamily: 'inherit', 
                                resize: 'vertical',
                                fontSize: '1rem',
                                transition: 'border-color 0.3s ease',
                                outline: 'none',
                                width: '100%',
                                boxSizing: 'border-box',
                                minHeight: '140px'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#00d0b0'}
                            onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                        ></textarea>
                    </div>

                    <motion.button 
                        type="submit" 
                        style={{ 
                            padding: '1.2rem 2rem', 
                            fontSize: '1.1rem', 
                            fontWeight: '600',
                            background: 'linear-gradient(135deg, #00d0b0 0%, #00b396 100%)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease',
                            width: '100%',
                            marginTop: '1rem'
                        }}
                        whileHover={{ scale: 1.02 }}
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
                    padding: '4rem', 
                    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                    color: 'white',
                    marginBottom: '3rem',
                    position: 'relative',
                    overflow: 'hidden'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100px',
                    height: '100px',
                    background: 'linear-gradient(135deg, #00d0b0, rgba(0, 208, 176, 0.3))',
                    borderRadius: '0 0 0 100px',
                    opacity: 0.1
                }}></div>
                
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
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
                    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                    borderRadius: '20px',
                    marginTop: '2rem'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <h3 style={{ color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '1rem' }}>
                    Ready to Find Your Dream Home?
                </h3>
                <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
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
                        fontSize: '1.1rem'
                    }}
                    whileHover={{ scale: 1.05 }}
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