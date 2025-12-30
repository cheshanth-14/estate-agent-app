import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        // Load from local storage if available
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (property) => {
        setFavorites((prev) => {
            if (prev.some((fav) => fav.id === property.id)) return prev;
            return [...prev, property];
        });
    };

    const removeFavorite = (propertyId) => {
        setFavorites((prev) => prev.filter((fav) => fav.id !== propertyId));
    };

    const clearFavorites = () => {
        setFavorites([]);
    };

    const isFavorite = (propertyId) => {
        return favorites.some((fav) => fav.id === propertyId);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, clearFavorites, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

FavoritesProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
