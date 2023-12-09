import React, { useState, useEffect, useRef } from 'react';
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
  const containerRef = useRef(null);
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    if (bottomRef.current) {
      window.scrollTo({ top: bottomRef.current.offsetTop, behavior: 'smooth' });
    }
  };

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
    setTimeout(scrollToBottom, 2)
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
        await onFormSubmit();
        scrollToBottom();
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const cards = container.getElementsByClassName('category-card');

      Array.from(cards).forEach((card) => {
        const rect = card.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const fadeOutDistance = 200; // Adjust this value based on your preference

        const distanceToLeftEdge = containerRect.left - rect.left;
        const distanceToRightEdge = rect.right - containerRect.right;

        if (distanceToLeftEdge >= 0 || distanceToRightEdge >= 0) {
          // Card is at or past either edge, apply fade
          const maxDistance = Math.max(distanceToLeftEdge, distanceToRightEdge);
          const opacity = 1 - Math.min(1, maxDistance / fadeOutDistance);
          card.style.opacity = opacity.toString();
        } else {
          // Card is within the container, fully opaque
          card.style.opacity = '1';
        }
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(()=>{
    setSelectedCategory(null)
  }, [])

  return (
    <div className='Form'>
      <h1 className={`form-head ${selectedCategory ? 'hide' : ''}`}>Choose a Disability Category</h1>
      <div className={selectedCategory ? 'singled' : "category-list"} ref={containerRef}>
        {filteredCategories.map((category, index) => (
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
          <div>
          <h2 className='sub'>What is your area of need?</h2>
          <div className='subcategory-list'>
            {getTechParams().map((tech, index) => (
              <div key={index} className={tech === selectedTechParam ? 'selected techParam' : 'techParam'} onClick={() => handleTechParamClick(tech)}>
              <p>
                {tech}
              </p>
              </div>
            ))}
          </div>
          </div>
        )}
      </div>
      {loading ? (
        <svg className='loader' width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect className="spinner_9y7u" x="1" y="1" rx="1" width="10" height="10"/>
          <rect className="spinner_9y7u spinner_DF2s" x="1" y="1" rx="1" width="10" height="10"/>
          <rect className="spinner_9y7u spinner_q27e" x="1" y="1" rx="1" width="10" height="10"/>
        </svg>
      ) : (
        isSubmitEnabled && (
          <button className='submit' ref={bottomRef} onClick={handleSubmit}>Submit</button>
        )
      )}
      {/* <div ref={bottomRef}></div> */}
    </div>
  );
};

export default Form;
