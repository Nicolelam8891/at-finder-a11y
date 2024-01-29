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

  const formatDefinition = (definition, strongTerms, color, category, isSelected, index) => {
    const elements = [];
    let remainingText = definition;
  
    strongTerms.forEach((term, termIndex) => {
      const key = `${category}-${term}-${index}-${termIndex}`;
      const foundIndex = remainingText.toLowerCase().indexOf(term.toLowerCase());
  
      if (foundIndex !== -1) {
        elements.push(remainingText.substring(0, foundIndex));
        elements.push(
          <strong key={key} style={{ color }}>
            <em>{remainingText.substr(foundIndex, term.length)}</em>
          </strong>
        );
        remainingText = remainingText.substr(foundIndex + term.length);
      }
    });
  
    elements.push(remainingText);
    return <p className={`cat-def ${isSelected ? 'hide' : ''}`} key={`${category}-${index}`}>{elements}</p>;
  };

  return (
    <div tabIndex={isSelected ? null : 0} className={`category-card ${isSelected ? 'selected' : ''}`} onClick={handleCategoryClick} onKeyDown={handleKeyDown} role="button">
      <h2 className='cat-title'>{category}</h2>
      <img className='img' src={image} alt="" />
      <div className='def-cont'>
        {data['definition'].map((definition, index) => (
          formatDefinition(definition, data['strongTerms'] || [], '#4D63B6', category, isSelected, index)
        ))}

      </div>
    </div>
  );
};

export default CategoryCard;
