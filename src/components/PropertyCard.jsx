import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaBed, FaHeart, FaMapMarkerAlt, FaHome } from 'react-icons/fa';
import { useFavorites } from '../context/FavoritesContext';

import './PropertyCard.css';

const PropertyCard = ({ property }) => {
    const { addFavorite, isFavorite, removeFavorite } = useFavorites();
    const isFav = isFavorite(property.id);

    const handleDragStart = (e) => {
        e.dataTransfer.setData('application/json', JSON.stringify(property));
        e.dataTransfer.effectAllowed = 'copy';
    };

    const toggleFavorite = (e) => {
        e.preventDefault(); // Prevent link click
        if (isFav) {
            removeFavorite(property.id);
        } else {
            addFavorite(property);
        }
    };

    return (
        <div
            className="property-card"
            draggable="true"
            onDragStart={handleDragStart}
        >
            <div className="card-image-container">
                <Link to={`/property/${property.id}`} style={{ display: 'block', height: '100%', textDecoration: 'none', color: 'inherit' }}>
                    <div className="status-badge">For Sale</div>
                    <img
                        src={property.images[0]}
                        alt={property.shortDescription}
                        className="card-image"
                    />
                </Link>
                <button
                    onClick={toggleFavorite}
                    className="fav-btn"
                    aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
                >
                    <FaHeart color={isFav ? "red" : "#ccc"} size={20} />
                </button>
            </div>

            <div className="card-content">
                <div className="prop-price">£{property.price.toLocaleString()}</div>

                <Link to={`/property/${property.id}`} style={{ textDecoration: 'none' }}>
                    <h4 className="prop-title">{property.shortDescription}</h4>
                </Link>

                <div className="prop-address">
                    <FaMapMarkerAlt /> {property.location}
                </div>

                <p className="prop-desc">
                    {property.longDescription}
                </p>

                <div className="prop-footer">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '500', color: 'var(--text-main)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <FaBed /> {property.bedrooms} Beds
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', textTransform: 'capitalize' }}>
                            <FaHome /> {property.type}
                        </div>
                    </div>

                    <div style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>
                        Added {new Date(property.dateAdded).toLocaleDateString('en-GB')}
                    </div>
                </div>
            </div>
        </div>
    );
};

PropertyCard.propTypes = {
    property: PropTypes.shape({
        id: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        shortDescription: PropTypes.string.isRequired,
        longDescription: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        postcode: PropTypes.string,
        postcodeArea: PropTypes.string,
        bedrooms: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
    }).isRequired
};

export default PropertyCard;
