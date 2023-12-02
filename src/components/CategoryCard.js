// CategoryCard.js
import React from 'react';

const CategoryCard = ({ category, data, onCategoryClick }) => {
  const handleCategoryClick = () => {
    onCategoryClick(category);
  };

  return (
    <div className="category-card" onClick={handleCategoryClick}>
      <h2>{category}</h2>
    </div>
  );
};

export default CategoryCard;
