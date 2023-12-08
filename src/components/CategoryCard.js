// CategoryCard.js
import './CategoryCard.css'
import React from 'react';
import Blindness from '../assets/Blindness.png'
import LowVision from '../assets/LowVision.png'
import Deafness from '../assets/Deafness.png'
import FineMotor from '../assets/FineMotor.png'
import GrossMotor from '../assets/GrossMotor.png'
import Reading from '../assets/Reading.png'
import Focus from '../assets/Focus.png'
import Math from '../assets/Math.png'
import Communication from '../assets/Communication.png'

const CategoryCard = ({ category, data, ind, onCategoryClick, onTechParamClick, isSelected }) => {
  const handleCategoryClick = () => {
    onCategoryClick(category);
  };

  const handleTechParamClick = (techParam) => {
    onTechParamClick(techParam);
  };

  const arr = [Blindness, LowVision, Deafness, FineMotor, GrossMotor, Reading, Math, Focus, Communication]
console.log(data['ind'])

const index = data['ind']

  return (
    <div className={`category-card ${isSelected ? 'selected' : ''}`} onClick={handleCategoryClick}>
      <h2>{category}</h2>
      <img className='img' src={arr[index]}/>
    </div>
  );
};

export default CategoryCard;
