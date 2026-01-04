import React, { useState } from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { FaTrash, FaTimes, FaHeart, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { images } from '../assets/images';

const FavoritesSidebar = () => {
    const { favorites, removeFavorite, clearFavorites, addFavorite } = useFavorites();
    const [isDragOver, setIsDragOver] = useState(false);
    const [isDraggingFavorite, setIsDraggingFavorite] = useState(false);
    const [isRemoveZoneActive, setIsRemoveZoneActive] = useState(false);
    const [draggedFavoriteId, setDraggedFavoriteId] = useState(null);

    const handleDragOver = (e) => {
        e.preventDefault();
        // Only show add zone if not dragging a favorite
        if (!isDraggingFavorite) {
            setIsDragOver(true);
        }
    };

    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);

        // Don't add if dropping a favorite item
        if (isDraggingFavorite) return;

        const data = e.dataTransfer.getData('application/json');
        if (data) {
            try {
                const property = JSON.parse(data);
                addFavorite(property);
            } catch (err) {
                console.error("Failed to parse dropped property", err);
            }
        }
    };

    // Handlers for dragging favorites OUT of the list
    const handleFavoriteDragStart = (e, favoriteId) => {
        e.dataTransfer.setData('text/plain', favoriteId);
        e.dataTransfer.effectAllowed = 'move';
        setIsDraggingFavorite(true);
        setDraggedFavoriteId(favoriteId);
    };

    const handleFavoriteDragEnd = () => {
        setIsDraggingFavorite(false);
        setDraggedFavoriteId(null);
        setIsRemoveZoneActive(false);
    };

    // Remove zone handlers
    const handleRemoveZoneDragOver = (e) => {
        e.preventDefault();
        setIsRemoveZoneActive(true);
    };

    const handleRemoveZoneDragLeave = () => {
        setIsRemoveZoneActive(false);
    };

    const handleRemoveZoneDrop = (e) => {
        e.preventDefault();
        const favoriteId = e.dataTransfer.getData('text/plain');
        if (favoriteId) {
            removeFavorite(favoriteId);
        }
        setIsRemoveZoneActive(false);
        setIsDraggingFavorite(false);
        setDraggedFavoriteId(null);
    };

    return (
        <aside
            className="favorites-sidebar card"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{
                padding: '1.5rem',
                height: 'fit-content',
                border: isDragOver ? '2px dashed var(--accent)' : '2px solid transparent',
                backgroundColor: isDragOver ? 'rgba(0, 208, 176, 0.05)' : 'var(--surface)',
                transition: 'all 0.2s ease'
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaHeart color="red" /> Favorites
                    {favorites.length > 0 && (
                        <span style={{
                            background: 'linear-gradient(135deg, #ff6b6b, #ee5a5a)',
                            color: 'white',
                            borderRadius: '50%',
                            width: '22px',
                            height: '22px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            fontWeight: '700'
                        }}>
                            {favorites.length}
                        </span>
                    )}
                </h3>
                {favorites.length > 0 && (
                    <button
                        onClick={clearFavorites}
                        className="btn btn-outline"
                        title="Clear all favorites"
                        style={{
                            fontSize: '0.75rem',
                            padding: '0.35rem 0.65rem',
                            borderColor: '#ff6b6b',
                            color: '#ff6b6b',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.3rem',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        <FaTrash size={11} /> Clear All
                    </button>
                )}
            </div>

            {favorites.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-light)' }}>
                    <FaHeart size={32} style={{ opacity: 0.3, marginBottom: '0.75rem' }} />
                    <p style={{ margin: 0 }}>Drag properties here<br />or click the heart icon.</p>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {favorites.map(fav => (
                        <div
                            key={fav.id}
                            draggable="true"
                            onDragStart={(e) => handleFavoriteDragStart(e, fav.id)}
                            onDragEnd={handleFavoriteDragEnd}
                            style={{
                                display: 'flex',
                                gap: '0.75rem',
                                alignItems: 'center',
                                background: draggedFavoriteId === fav.id ? 'rgba(255, 107, 107, 0.1)' : 'var(--background)',
                                padding: '0.65rem',
                                borderRadius: 'var(--radius-sm)',
                                cursor: 'grab',
                                transition: 'all 0.2s ease',
                                border: '1px solid var(--border)',
                                opacity: draggedFavoriteId === fav.id ? 0.5 : 1
                            }}
                            className="favorite-item"
                        >
                            <img
                                src={images[fav.images[0]]}
                                alt={fav.shortDescription}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    objectFit: 'cover',
                                    borderRadius: 'var(--radius-sm)',
                                    flexShrink: 0
                                }}
                            />
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <Link
                                    to={`/property/${fav.id}`}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'inherit',
                                        fontWeight: '600',
                                        fontSize: '0.85rem',
                                        display: 'block',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        marginBottom: '0.2rem'
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {fav.shortDescription}
                                </Link>
                                <div style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: '600' }}>
                                    £{fav.price.toLocaleString()}
                                </div>
                            </div>
                            <button
                                onClick={() => removeFavorite(fav.id)}
                                style={{
                                    background: 'rgba(255, 107, 107, 0.1)',
                                    border: 'none',
                                    color: '#ff6b6b',
                                    padding: '0.5rem',
                                    borderRadius: 'var(--radius-sm)',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                className="remove-btn"
                                aria-label="Remove from favorites"
                                title="Remove from favorites"
                            >
                                <FaTimes size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Drop zone for removing favorites by dragging out */}
            {isDraggingFavorite && (
                <div
                    onDragOver={handleRemoveZoneDragOver}
                    onDragLeave={handleRemoveZoneDragLeave}
                    onDrop={handleRemoveZoneDrop}
                    style={{
                        marginTop: '1rem',
                        padding: '1rem',
                        border: `2px dashed ${isRemoveZoneActive ? '#ff6b6b' : '#ddd'}`,
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: isRemoveZoneActive ? 'rgba(255, 107, 107, 0.15)' : 'rgba(255, 107, 107, 0.05)',
                        textAlign: 'center',
                        color: isRemoveZoneActive ? '#ff6b6b' : 'var(--text-light)',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <FaTrashAlt size={16} />
                    <span style={{ fontWeight: '500', fontSize: '0.9rem' }}>
                        {isRemoveZoneActive ? 'Release to remove' : 'Drop here to remove'}
                    </span>
                </div>
            )}

            <style>{`
                .favorite-item:hover {
                    border-color: var(--accent) !important;
                    transform: translateX(4px);
                }
                .favorite-item:hover .remove-btn {
                    background: #ff6b6b !important;
                    color: white !important;
                }
                .remove-btn:hover {
                    transform: scale(1.1);
                }
            `}</style>
        </aside>
    );
};

export default FavoritesSidebar;
