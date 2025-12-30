import React from 'react';
import PropTypes from 'prop-types';
import PropertyCard from './PropertyCard';
import { motion } from 'framer-motion';

const PropertyList = ({ properties }) => {
    if (properties.length === 0) {
        return (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--text-light)' }}>
                <h3>No properties found</h3>
                <p>Try adjusting your search filters</p>
            </div>
        );
    }

    return (
        <div className="property-list-container">
            {properties.map(prop => (
                <motion.div
                    key={prop.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <PropertyCard property={prop} />
                </motion.div>
            ))}
            <style>{`
        .property-list-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
      `}</style>
        </div>
    );
};

PropertyList.propTypes = {
    properties: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PropertyList;
