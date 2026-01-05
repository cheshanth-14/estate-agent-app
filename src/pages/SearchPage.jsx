import React, { useState, useEffect, useCallback } from 'react';
import SearchForm from '../components/SearchForm';
import PropertyList from '../components/PropertyList';
import FavoritesSidebar from '../components/FavoritesSidebar';
import { filterProperties } from '../utils/filterUtils';
import propertiesData from '../data/properties.json';

const SearchPage = () => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load properties
    useEffect(() => {
        // Simulate loading
        setProperties(propertiesData);
        setFilteredProperties(propertiesData);
        setLoading(false);
    }, []);

    const handleFilterChange = useCallback((filters) => {
        if (!properties.length) return;
        const results = filterProperties(properties, filters);
        setFilteredProperties(results);
    }, [properties]);

    if (loading) return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading properties...</div>;

    return (
        <div className="search-page-layout">
            <div className="search-main">
                <SearchForm onFilterChange={handleFilterChange} />

                <div style={{ marginBottom: '1rem', color: 'var(--text-light)', fontWeight: '500' }}>
                    Found {filteredProperties.length} results
                </div>

                <PropertyList properties={filteredProperties} />
            </div>

            <div className="search-sidebar">
                <div style={{ position: 'sticky', top: '100px', zIndex: 100 }}>
                    <FavoritesSidebar />
                </div>
            </div>

            <style>{`
        .search-page-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        @media (min-width: 900px) {
          .search-page-layout {
            grid-template-columns: 3fr 1fr;
          }
        }
      `}</style>
        </div>
    );
};

export default SearchPage;
