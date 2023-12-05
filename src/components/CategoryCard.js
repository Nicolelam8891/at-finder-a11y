// CategoryCard.js
import './CategoryCard.css'
import React from 'react';

const CategoryCard = ({ category, data, onCategoryClick, onTechParamClick, isSelected }) => {
  const handleCategoryClick = () => {
    onCategoryClick(category);
  };

  const handleTechParamClick = (techParam) => {
    onTechParamClick(techParam);
  };

  return (
    <div className={`category-card ${isSelected ? 'selected' : ''}`} onClick={handleCategoryClick}>
      <h2>{category}</h2>
    </div>
  );
};

export default CategoryCard;
