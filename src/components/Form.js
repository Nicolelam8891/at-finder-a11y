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
  const [loading, setLoading] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState(Object.keys(needs));

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setFilteredCategories(Object.keys(needs));
    } else {
      setSelectedCategory(category);
      setFilteredCategories([category]);
    }
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

  const handleSubmit = async () => {
    if (isSubmitEnabled) {
      setLoading(true);
      try {
        // Call the asynchronous function using await
        await onFormSubmit();
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className='Form'>
      <div className={selectedCategory ? 'singled' : "category-list"}>
        {filteredCategories.map((category) => (
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
              <div key={index} className={tech === selectedTechParam ? 'selected techParam' : 'techParam'} onClick={() => handleTechParamClick(tech)}>
              <p>
                {tech}
              </p>
              </div>
            ))}
          </div>
        )}
      </div>
      {loading ? (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect className="spinner_9y7u" x="1" y="1" rx="1" width="10" height="10"/>
          <rect className="spinner_9y7u spinner_DF2s" x="1" y="1" rx="1" width="10" height="10"/>
          <rect className="spinner_9y7u spinner_q27e" x="1" y="1" rx="1" width="10" height="10"/>
        </svg>
      ) : (
        isSubmitEnabled && (
          <button className='submit' onClick={handleSubmit}>Submit</button>
        )
      )}
      
    </div>
  );
};

export default Form;
