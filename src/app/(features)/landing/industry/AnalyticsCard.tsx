import React from 'react';
// Import standard CSS file, not a CSS Module
import './analytics-card.css';

const kpis = [
  { label: 'Efficiency', value: '+18%' },
  { label: 'Engagement', value: '+26%' },
  { label: 'Productivity', value: '+65%' },
];

const barData = [
  { height: '60%', highlight: false },
  { height: '30%', highlight: false },
  { height: '40%', highlight: false },
  { height: '65%', highlight: false },
  { height: '100%', highlight: true }, // The highlighted bar
  { height: '50%', highlight: false },
  { height: '60%', highlight: false },
  { height: '70%', highlight: false },
  { height: '80%', highlight: false },
];

const AnalyticsCard = () => {
  return (
    // Block: analytics-card
    <div className="analytics-card">

      {/* 1. KPIs Section */}
      {/* Element: analytics-card__kpis */}
      <div className="analytics-card__kpis">
        {kpis.map((kpi, index) => (
          // Element: analytics-card__kpi-item
          <div key={index} className="analytics-card__kpi-item">
            {/* Element: analytics-card__kpi-label */}
            <span className="analytics-card__kpi-label">{kpi.label}</span>
            {/* Element: analytics-card__kpi-value */}
            <span className="analytics-card__kpi-value">{kpi.value}</span>
          </div>
        ))}
      </div>

      {/* 2. Chart Section */}
      {/* Element: analytics-card__chart */}
      <div className="analytics-card__chart">
        {/* Element: analytics-card__avg-line */}
        <div className="analytics-card__avg-line">
          {/* Element: analytics-card__avg-text */}
          <span className="analytics-card__avg-text">1 Week Avg.</span>
        </div>
        
        {/* Element: analytics-card__bar-group */}
        <div className="analytics-card__bar-group">
          {barData.map((bar, index) => (
            // Element: analytics-card__bar-wrapper
            // Modifier: analytics-card__bar-wrapper--highlight
            <div
              key={index}
              className={`analytics-card__bar-wrapper ${bar.highlight ? 'analytics-card__bar-wrapper--highlight' : ''}`}
            >
              {/* Element: analytics-card__bar */}
              {/* Modifier: analytics-card__bar--highlight */}
              <div
                className={`analytics-card__bar ${bar.highlight ? 'analytics-card__bar--highlight' : ''}`}
                style={{ height: bar.height }}
              >
                {/* Element: analytics-card__highlight-dot */}
                {bar.highlight && <div className="analytics-card__highlight-dot"></div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Footer/Description Section */}
      {/* Element: analytics-card__footer */}
      {/* <div className="analytics-card__footer"> */}
        {/* Element: analytics-card__title */}
        {/* <h2 className="analytics-card__title">Advanced analytics</h2> */}
        {/* Element: analytics-card__description */}
        {/* <p className="analytics-card__description">
          Deep, actionable insights into performance and audience trends.
        </p> */}
      {/* </div> */}
    </div>
  );
};

export default AnalyticsCard;