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

  // const formatDefinition = (definition, strongTerms, color) => {
  //   let formattedDefinition = definition;
  //   strongTerms.forEach(term => {
  //     const replacement = `<strong style="color: ${color}"><em>${term}</em></strong>`;
  //     formattedDefinition = formattedDefinition.replace(new RegExp(term, 'gi'), match => replacement);
  //   });
  //   return <p className={`cat-def ${isSelected ? 'hide' : ''}`} dangerouslySetInnerHTML={{ __html: formattedDefinition }} />;
  // };

  const formatDefinition = (definition, strongTerms, color) => {
    const elements = [];
    let remainingText = definition;
  
    strongTerms.forEach(term => {
      const index = remainingText.toLowerCase().indexOf(term.toLowerCase());
      if (index !== -1) {
        elements.push(remainingText.substring(0, index));
        elements.push(<strong style={{ color }}><em>{remainingText.substr(index, term.length)}</em></strong>);
        remainingText = remainingText.substr(index + term.length);
      }
    });
    elements.push(remainingText);
    return <p className={`cat-def ${isSelected ? 'hide' : ''}`}>{elements}</p>;
  };


  return (
    <div tabIndex={isSelected ? null : 0} className={`category-card ${isSelected ? 'selected' : ''}`} onClick={handleCategoryClick} onKeyDown={handleKeyDown} role="button">
      <h2 className='cat-title'>{category}</h2>
      <img className='img' src={image} alt="" />
      <div className='def-cont'>
        {data['definition'].map((definition, index) => (
          formatDefinition(definition, data['strongTerms'] || [], '#4D63B6')
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
