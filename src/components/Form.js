import React, { useState, useEffect, useRef } from 'react';
import './Form.css';
import needs from '../mockData/needs';
import CategoryCard from './CategoryCard';
import { useNavigate, useParams } from 'react-router-dom';
import Blindness from '../assets/Blindness.png'
import LowVision from '../assets/LowVision.png'
import Deafness from '../assets/Deafness.png'
import FineMotor from '../assets/FineMotor.png'
import GrossMotor from '../assets/GrossMotor.png'
import Reading from '../assets/Reading.png'
import Focus from '../assets/Focus.png'
import Math from '../assets/Math.png'
import Communication from '../assets/Communication.png'

const Form = ({  
  selectedCategory,
  setSelectedCategory,
  selectedTechParam,
  setSelectedTechParam,
  onFormSubmit,
}) => {
  const [loading, setLoading] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState(Object.keys(needs));
  const [categoryImage, setCategoryImage] = useState(null)
  // const containerRef = useRef(null);
  // const bottomRef = useRef(null);
  const navigate = useNavigate();
  const { selectedCategory: urlSelectedCategory } = useParams();

  useEffect(()=>{
    setSelectedCategory(null)
  }, [])

  useEffect (() => {
    if (urlSelectedCategory) {
      setSelectedCategory(urlSelectedCategory);
      setFilteredCategories([urlSelectedCategory]);
    } else {
      setSelectedCategory(null);
      setFilteredCategories(Object.keys(needs));
    }
  }, [urlSelectedCategory])

  // const scrollToBottom = () => {
  //   if (bottomRef.current) {
  //     window.scrollTo({ top: bottomRef.current.offsetTop, behavior: 'smooth' });
  //   }
  // };

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setFilteredCategories(Object.keys(needs));
      navigate(`/findmyat`);
    } else {
      setSelectedCategory(category);
      setFilteredCategories([category]);
      navigate(`/findmyat/${category}`);
    }
    setSelectedTechParam(null);
  };

  // const handleTechParamClick = (techParam) => {
  //   setSelectedTechParam(techParam);
  //   setTimeout(scrollToBottom, 2) (NOTE REMOVE THIS NO MATTER WHAT)
  // };

  const handleTechParamClick = async (techParam) => {
    setSelectedTechParam(techParam);
    try {
      setLoading(true);
      await onFormSubmit();
    } catch (error) {
      console.error('Error', error);
    } finally {
      setLoading(false);
    }
  };
 
  const handleTechKeyDown = (e, techParam) => {
    if (document.activeElement === e.currentTarget && (e.key === ' ' || e.key === 'Enter')) {
      handleTechParamClick(techParam);
    }
  };

  const getTechParams = () => {
    if (selectedCategory) {
      return needs[selectedCategory]['technology parameter'];
    }
    return [];
  };
  
const index = selectedCategory ? needs[selectedCategory].ind : 0;

const arr = [Blindness, LowVision, Deafness, FineMotor, GrossMotor, Reading, Math, Focus, Communication]

const getCategoryImage = (category) => {
  if (selectedCategory) {
    setCategoryImage(arr[index]);
  } else {
    const categoryIndex = Object.keys(needs).indexOf(category);
    setCategoryImage(arr[categoryIndex]);
  }
}

useEffect(() => {
  getCategoryImage();
}, [selectedCategory]);

return (
    <div className='Form'>
    {/* // <div className="category-list"> */}
      <h2 className={`form-head ${selectedCategory ? 'hide' : ''}`}>Choose a Disability Category</h2>
      {/* <h2 className={`category-heading ${selectedCategory ? 'hide' : ''}`}>Choose a Disability Category</h2> */}
    <div className={selectedCategory ? 'singled' : "category-list"}>
    {/* <div className={selectedCategory ? 'singled' : "category-list"} ref={containerRef}> */}
    {selectedCategory ? (
        <div>
          <h2 className='sub'>{`Tools for ${selectedCategory}`}</h2>
          <img src={categoryImage} alt="" />
          <p>Choose a tool category to have ChatGPT generate a list of assistive technologies.</p>
          <div className='subcategory-list'>
            {getTechParams().map((tech, index) => (
              <div
                tabIndex="0"
                key={index}
                className={tech === selectedTechParam ? 'selected techParam' : 'techParam'}
                onClick={() => handleTechParamClick(tech)}
                onKeyDown={(e) => handleTechKeyDown(e, tech)}
                role="button"
              >
                <p>
                  {tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        filteredCategories.map((category, index) => (
          <CategoryCard
            key={category}
            category={category}
            data={needs[category]}
            onCategoryClick={handleCategoryClick}
            isSelected={category === selectedCategory}
            image={arr[needs[category].ind]}
          />
        ))
      )}
    </div>
    {loading && (
      <div>
      <p>Please wait while ChatGPT fetches your requested assistive technologies.</p>
      <svg className='loader' width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect className="spinner_9y7u" x="1" y="1" rx="1" width="10" height="10"/>
        <rect className="spinner_9y7u spinner_DF2s" x="1" y="1" rx="1" width="10" height="10"/>
        <rect className="spinner_9y7u spinner_q27e" x="1" y="1" rx="1" width="10" height="10"/>
      </svg>
      </div>
    )}
  </div>
);
};

export default Form;