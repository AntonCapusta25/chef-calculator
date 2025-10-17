import React, { useState, useEffect } from 'react';
import './ChefEarningsCalculator.css';

const ChefEarningsCalculator = () => {
  // State for slider values
  const [price, setPrice] = useState(25);
  const [days, setDays] = useState(5);
  const [meals, setMeals] = useState(10);
  
  // State for calculated earnings
  const [earnings, setEarnings] = useState({
    weekly: 0,
    monthly: 0,
    yearly: 0
  });

  // Calculate earnings whenever slider values change
  useEffect(() => {
    const mealsWeek = meals * days;
    const weekly = mealsWeek * price;
    const monthly = weekly * 4.33;
    const yearly = weekly * 52;

    setEarnings({
      weekly: Math.round(weekly),
      monthly: Math.round(monthly),
      yearly: Math.round(yearly)
    });
  }, [price, days, meals]);

  // Format numbers with commas
  const formatNumber = (num) => {
    return num.toLocaleString('en-US');
  };

  return (
    <section className="calculator-section">
      <div className="calculator-container">
        {/* Left Content */}
        <div className="calculator-text">
          <h2>Start Earning as a Chef</h2>
          <p>
            Join Homemade and turn your passion for cooking into a thriving business. 
            Our platform connects you with hungry neighbors who crave authentic, homemade meals.
          </p>
          <p>
            Use our calculator to estimate your potential earnings based on your pricing, 
            availability, and meal capacity. <span className="highlight">The possibilities are endless!</span>
          </p>
          
          <ul className="benefits-list">
            <li>Set your own prices and schedule</li>
            <li>Work from the comfort of your home</li>
            <li>Build a loyal customer base in your neighborhood</li>
            <li>Get support with marketing and legal requirements</li>
            <li>Sustainable delivery within 1.5km radius</li>
          </ul>
        </div>

        {/* Right Content - Calculator */}
        <div className="calculator-card">
          <div className="calculator-header">
            <h3>Calculate Your Earnings</h3>
            <p>See your potential monthly income</p>
          </div>

          {/* Price Slider */}
          <div className="input-group">
            <div className="input-label">
              <span className="label-text">Price per meal</span>
              <span className="label-value">€{price}</span>
            </div>
            <input 
              type="range" 
              className="slider" 
              min="10" 
              max="100" 
              value={price} 
              step="1"
              onChange={(e) => setPrice(parseInt(e.target.value))}
            />
            <div className="slider-hint">
              <span>€10</span>
              <span>€100</span>
            </div>
          </div>

          {/* Days Slider */}
          <div className="input-group">
            <div className="input-label">
              <span className="label-text">Days open per week</span>
              <span className="label-value">{days} days</span>
            </div>
            <input 
              type="range" 
              className="slider" 
              min="1" 
              max="7" 
              value={days} 
              step="1"
              onChange={(e) => setDays(parseInt(e.target.value))}
            />
            <div className="slider-hint">
              <span>1 day</span>
              <span>7 days</span>
            </div>
          </div>

          {/* Meals Slider */}
          <div className="input-group">
            <div className="input-label">
              <span className="label-text">Meals per day</span>
              <span className="label-value">{meals} meals</span>
            </div>
            <input 
              type="range" 
              className="slider" 
              min="5" 
              max="50" 
              value={meals} 
              step="1"
              onChange={(e) => setMeals(parseInt(e.target.value))}
            />
            <div className="slider-hint">
              <span>5 meals</span>
              <span>50 meals</span>
            </div>
          </div>

          {/* Earnings Display */}
          <div className="earnings-display">
            <div className="earnings-label">You could earn</div>
            <div className="earnings-amount">€{formatNumber(earnings.monthly)}</div>
            <div className="earnings-period">per month</div>

            <div className="breakdown">
              <div className="breakdown-item">
                <div className="breakdown-label">Per week</div>
                <div className="breakdown-value">€{formatNumber(earnings.weekly)}</div>
              </div>
              <div className="breakdown-item">
                <div className="breakdown-label">Per year</div>
                <div className="breakdown-value">€{formatNumber(earnings.yearly)}</div>
              </div>
            </div>
          </div>

          <a href="https://zol4dc90rf4.typeform.com/to/oWqjbUF0" className="cta-button">
            Start Earning Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChefEarningsCalculator;