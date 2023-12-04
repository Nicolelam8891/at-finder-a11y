import React, { useState } from 'react';
import './Form.css';
import needs from '../mockData/needs';
import CategoryCard from './CategoryCard';

const Form = ({  
  selectedCategory,
  setSelectedCategory,
  selectedTechParam,
  setSelectedTechParam,
  onFormSubmit,
}) => {
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // const [selectedTechParam, setSelectedTechParam] = useState(null);

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

  const isSubmitEnabled = selectedCategory && selectedTechParam;

  const handleSubmit = () => {
    console.log('hello');
    onFormSubmit();
  };

  return (
    <div className='Form'>
      <div className="category-list">
        {Object.keys(needs).map((category) => (
          <CategoryCard
            key={category}
            category={category}
            data={needs[category]}
            onCategoryClick={handleCategoryClick}
            isSelected={category === selectedCategory}
          />
        ))}
      </div>
      <div>
        {selectedCategory && (
          <div className='subcategory-list'>
            {getTechParams().map((tech, index) => (
              <p
                key={index}
                className={tech === selectedTechParam ? 'selected techParam' : 'techParam'}
                onClick={() => handleTechParamClick(tech)}
              >
                {tech}
              </p>
            ))}
          </div>
        )}
      </div>
      {isSubmitEnabled && (
        <button onClick={handleSubmit}>Submit</button>
      )}
      
    </div>
    
  );
};

export default Form;
