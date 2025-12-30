import React from 'react';
import Select from 'react-select';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
            <h1 style={{ color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>Contact Us</h1>

            <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ background: 'var(--accent)', padding: '1rem', borderRadius: '50%', color: 'white', marginBottom: '0.5rem' }}>
                            <FaUser size={24} />
                        </div>
                        <h2 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--text-main)' }}>J.Cheshanth</h2>
                        <span style={{ color: 'var(--text-light)' }}>Real Estate Agent</span>
                    </div>

                    <div style={{ width: '100%', height: '1px', background: 'var(--border)' }}></div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', width: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                            <FaEnvelope size={20} color="var(--accent)" />
                            <a href="mailto:cheshanth@gmail.com" style={{ fontSize: '1.1rem', color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500' }}>
                                cheshanth@gmail.com
                            </a>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                            <FaPhone size={20} color="var(--accent)" />
                            <a href="tel:+94765743454" style={{ fontSize: '1.1rem', color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500' }}>
                                +94 765 743 454
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{ padding: '2rem', marginTop: '3rem' }}>
                <h2 style={{ textAlign: 'center', color: 'var(--primary)', marginBottom: '1.5rem' }}>Send us Feedback</h2>
                <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for your feedback!'); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="name" style={{ fontWeight: '500' }}>Name</label>
                            <input type="text" id="name" required className="form-input" style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="email" style={{ fontWeight: '500' }}>Email</label>
                            <input type="email" id="email" required className="form-input" style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="subject" style={{ fontWeight: '500' }}>Subject</label>
                        <Select
                            options={[
                                { value: 'general', label: 'General Inquiry' },
                                { value: 'viewing', label: 'Book a Viewing' },
                                { value: 'valuation', label: 'Property Valuation' },
                                { value: 'feedback', label: 'Website Feedback' }
                            ]}
                            placeholder="Select Subject..."
                            styles={{
                                control: (base) => ({ ...base, borderColor: 'var(--border)', borderRadius: 'var(--radius-sm)', padding: '0.2rem' })
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="message" style={{ fontWeight: '500' }}>Message</label>
                        <textarea id="message" required rows="5" style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ padding: '1rem', fontSize: '1.1rem', fontWeight: '600' }}>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
