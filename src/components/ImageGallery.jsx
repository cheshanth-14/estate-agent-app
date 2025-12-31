import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className="image-gallery">
            <div className="main-image-container">
                <img
                    src={images[activeImage]}
                    alt="Property Main"
                    className="main-image"
                />
            </div>
            <div className="thumbnail-strip">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={`thumbnail-btn ${activeImage === idx ? 'active' : ''}`}
                    >
                        <img src={img} alt={`Thumb ${idx}`} />
                    </button>
                ))}
            </div>           
            <style>{`
        .image-gallery {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .main-image-container {
          height: 400px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .thumbnail-strip {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
          gap: 0.5rem;
        }
        .thumbnail-btn {
          aspect-ratio: 1;
          padding: 0;
          border: 2px solid transparent;
          border-radius: var(--radius-md);
          overflow: hidden;
          cursor: pointer;
          opacity: 0.7;
          transition: all 0.2s;
        }
        .thumbnail-btn.active {
          border-color: var(--accent);
          opacity: 1;
        }
        .thumbnail-btn:hover {
          opacity: 1;
        }
        .thumbnail-btn img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
        </div>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ImageGallery;
