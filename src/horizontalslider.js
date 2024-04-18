import React, { useState } from 'react';
import './horizontalslider.css';

const Horizontalslider = ({ images, title }) => {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(null);

  const handlePrev = () => {
    setCurrent(current > 0 ? current - 1 : 0);
  };

  const handleNext = () => {
    setCurrent(current < images.length - 1 ? current + 1 : images.length - 1);
  };

  return (
    <div className="horizontalslider-container">
      <div className="horizontalslider">
        <h1 style={{ fontWeight: 'bold' }}>{title}</h1>
        <div className="cards-container" style={{ transform: `translateX(-${current * 200}px)` }}>
          {images.map((image, index) => (
            <div
              className={`card ${index === hovered ? 'hover' : ''}`}
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <img src={image} alt={`Book ${index + 1}`} className="card-image" />
            </div>
          ))}
        </div>
        <button className="prev" onClick={handlePrev} disabled={current === 0}>❮</button>
        <button className="next" onClick={handleNext} disabled={current === images.length - 1}>❯</button>
      </div>
    </div>
  );
};

export default Horizontalslider;
