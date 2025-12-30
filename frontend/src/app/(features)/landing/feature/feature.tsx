'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CheckSquare, Users, Box, Circle } from 'lucide-react';
import featureProperties from './properties/featureProperties';

import './feature.css';
import './featureMQ.css';

const Feature = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featureProperties.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Hover handlers
  const handleMouseEnter = (index: number) => {
    setIsPaused(true);
    setCurrentSlide(index);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="feature">
      <div className="feature-box">
        <div className="feature-box-heading">
          <p className="feature-box-heading-medium">Our Services</p>
          <p className="feature-box-heading-regular">
            Your targeted functions, all in one place. <br />
            Deliver an efficient system to your business effortlessly.
          </p>
        </div>

        <div className="carousel-container">
          {/* Nav */}
          <div className="carousel-nav">
            {featureProperties.map((prop, index) => (
              <div
                key={prop.id}
                className={`nav-item ${
                  index === 0 ? 'appointment' : index === 1 ? 'recruitment' : index === 2 ? 'inventory' : 'task'
                } ${currentSlide === index ? 'active' : ''}`}
                style={{backgroundColor: prop.color}}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {index === 0 && <CheckSquare size={32} />}
                {index === 1 && <Users size={32} />}
                {index === 2 && <Box size={32} />}
                {index === 3 && <Circle size={32} />}
              </div>
            ))}
          </div>

          {/* Slides */}
          <div className="carousel-content">
            {featureProperties.map((prop, index) => (
              <div
                key={prop.id} 
                className={`slide ${currentSlide === index ? 'active' : ''}`}
              >
                <div className="carousel-photo">
                  <div className="card-stack">
                    {/* Peek card (behind) */}
                    <div className="card peek" style={{ background: featureProperties[(index + 1) % 4].color }} />
                    {/* Active card (on top) */}
                    <div className="card active" style={{background: prop.color }}>
                      <Image
                        src={prop.img.src}
                        alt={prop.img.alt}
                        fill
                        style={{ objectFit: 'contain', padding: '20px' }}
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>

                <div className="carousel-info">
                  <div className="hook">{prop.hook}</div>
                  <div className="header">{prop.header}</div>
                  <div className="main-info">{prop.mainInfo}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;