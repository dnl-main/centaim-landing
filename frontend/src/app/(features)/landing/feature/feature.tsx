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

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featureProperties.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

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
          <div className="carousel-nav">
            {featureProperties.map((prop, index) => {
              const isActive = currentSlide === index;
              return (
                <div
                  key={prop.id}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                  style={{
                    /* Nav items are white when inactive, primary color when active */
                    backgroundColor: isActive ? '#00889a' : '#ffffff',
                    color: isActive ? '#ffffff' : '#00889a',
                    border: `1px solid #00889a`
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {index === 0 && <CheckSquare size={32} />}
                  {index === 1 && <Users size={32} />}
                  {index === 2 && <Box size={32} />}
                  {index === 3 && <Circle size={32} />}
                </div>
              );
            })}
          </div>

          <div className="carousel-content">
            {featureProperties.map((prop, index) => (
              <div
                key={prop.id} 
                className={`slide ${currentSlide === index ? 'active' : ''}`}
              >
                <div className="carousel-photo">
                  <div className="card-stack">
                    {featureProperties.map((card, i) => {
                      const isActive = i === currentSlide;
                      const offset = i - currentSlide;

                      return (
                        <div
                            key={card.id}
                            className={`card ${isActive ? 'active' : 'inactive'}`}
                            style={{
                              /* Cards are pure white when inactive, primary teal when active */
                              '--card-bg': isActive ? '#00889a' : '#ffffff',
                              '--offset': offset,
                              '--z': isActive ? 50 : 10 - Math.abs(offset),
                            } as React.CSSProperties}
                          >
                            <Image
                              src={card.img.src}
                              alt={card.img.alt}
                              fill
                              className="card-img"
                              priority={i === 0}
                            />
                          </div>
                      );
                    })}
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