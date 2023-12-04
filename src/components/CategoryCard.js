// CategoryCard.js
import './CategoryCard.css'
import React from 'react';

const CategoryCard = ({ category, data, onCategoryClick, onTechParamClick }) => {
  const handleCategoryClick = () => {
    onCategoryClick(category);
  };

  const handleTechParamClick = (techParam) => {
    onTechParamClick(techParam);
  };

  return (
    <div className="category-card" onClick={handleCategoryClick}>
      <h2>{category}</h2>
    </div>
  );
};

export default CategoryCard;
