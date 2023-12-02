// Form.js
import React, { useState } from 'react';
import './Form.css';
import needs from '../mockData/needs';
import CategoryCard from './CategoryCard';

const Form = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTechParam, setSelectedTechParam] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
    setSelectedTechParam(null);
  };

  const handleTechParamClick = (techParam) => {
    setSelectedTechParam(techParam);
  };

  const getTechParams = () => {
    if (selectedCategory) {
      return needs[selectedCategory]['technology parameter'];
    }
    return [];
  };

  return (
    <div>
      <div>
        <h2>Selected Technology Parameter</h2>
        {selectedCategory && (
          <ul>
            {getTechParams().map((tech, index) => (
              <li
                key={index}
                className={tech === selectedTechParam ? 'selected' : ''}
                onClick={() => handleTechParamClick(tech)}
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="category-list">
        {Object.keys(needs).map((category) => (
          <CategoryCard
            key={category}
            category={category}
            data={needs[category]}
            onCategoryClick={handleCategoryClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Form;
