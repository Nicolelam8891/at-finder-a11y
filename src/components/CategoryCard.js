import './CategoryCard.css'
import React from 'react';

const CategoryCard = ({ category, data, onCategoryClick, onTechParamClick, isSelected, image }) => {
  const handleCategoryClick = () => {
    onCategoryClick(category);
  };

  const handleKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      handleCategoryClick();
    }
  };

  const handleTechParamClick = (techParam) => {
    onTechParamClick(techParam);
  };

  return (
    <div tabIndex={isSelected ? null : 0} className={`category-card ${isSelected ? 'selected' : ''}`} onClick={handleCategoryClick} onKeyDown={handleKeyDown} role="button">
      <h2 className='cat-title'>{category}</h2>
      <img className='img' src={image} alt="" />
      <div className='def-cont'>
      {data['definition'].map((definition, index) => (
  <p className={`cat-def ${isSelected ? 'hide' : ''}`} key={index}>{definition}</p>
))}
</div>
    </div>
  );
};

export default CategoryCard;
