import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaHeart, FaArrowLeft, FaBed, FaMapMarkerAlt, FaCheck, FaHome } from 'react-icons/fa';
import { useFavorites } from '../context/FavoritesContext';
import ImageGallery from '../components/ImageGallery';
import TabsSection from '../components/TabsSection';
import propertiesData from '../data/properties.json';

const PropertyDetails = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    useEffect(() => {
        // Simulate finding in local data
        const found = propertiesData.find(p => p.id === id);
        setProperty(found);
        setLoading(false);
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!property) return <div>Property not found</div>;

    const isFav = isFavorite(property.id);

    return (
        <div className="container" style={{ paddingBottom: '3rem', paddingTop: '1rem' }}>
            <Link to="/properties" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', textDecoration: 'none', color: 'var(--text-light)', fontWeight: '500' }}>
                <FaArrowLeft /> Back to Search
            </Link>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                    <h1 style={{ margin: '0 0 0.5rem 0', fontSize: '2rem', color: 'var(--primary)' }}>{property.shortDescription}</h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-light)' }}>
                        <FaMapMarkerAlt /> {property.location}
                    </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--primary)' }}>£{property.price.toLocaleString()}</div>
                    <div style={{ color: 'var(--text-light)', fontWeight: '500' }}>{property.type} - {property.bedrooms} Beds</div>
                </div>
            </div>

            <div className="property-details-grid">

                {/* Left Col: Gallery */}
                <div>
                    <ImageGallery images={property.images} />
                </div>

                {/* Right Col: Actions & Key Features */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="card" style={{ padding: '1.5rem' }}>
                        <button
                            onClick={() => isFav ? removeFavorite(property.id) : addFavorite(property)}
                            className={`btn ${isFav ? 'btn-secondary' : 'btn-accent'}`}
                            style={{ width: '100%', gap: '0.5rem', fontSize: '1.1rem', padding: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}
                        >
                            <FaHeart color={isFav ? "red" : "white"} />
                            {isFav ? 'Remove from Favorites' : 'Save Property'}
                        </button>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-light)', textAlign: 'center' }}>
                            Added on {new Date(property.dateAdded).toLocaleDateString()}
                        </p>
                    </div>

                    <div className="card" style={{ padding: '1.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Key Features</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '1.05rem', color: 'var(--text-main)' }}>
                                <FaBed color="var(--accent)" /> {property.bedrooms} Bedrooms
                            </li>
                            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '1.05rem', color: 'var(--text-main)' }}>
                                <FaHome color="var(--accent)" /> {property.type}
                            </li>
                            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '1.05rem', color: 'var(--text-main)' }}>
                                <FaCheck color="var(--accent)" /> Great Location
                            </li>
                            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '1.05rem', color: 'var(--text-main)' }}>
                                <FaCheck color="var(--accent)" /> High Specification
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div style={{ marginTop: '2rem' }}>
                <TabsSection
                    description={property.longDescription}
                    floorPlan={property.floorPlanImage}
                    mapUrl={`https://maps.google.com/maps?q=${encodeURIComponent(property.location)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                />
            </div>

            <style>{`
        .property-details-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 900px) {
          .property-details-grid {
            grid-template-columns: 2fr 1fr;
          }
        }
      `}</style>
        </div>
    );
};

export default PropertyDetails;
