import './Results.css'
import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import TechList from './TechList';
import CommentSection from './CommentSection';
// import comments from '../mockData/comments';

function Results({ tech, techComments, category }) {
  const [comments, setComments] = useState([]);
  const [showTechSection, setShowTechSection] = useState(true);
  const [activeFilter, setActiveFilter] = useState('tech');


  useEffect(() => {
    setComments(techComments);
  }, []);

  const handleCommentSubmit = (commentData) => {
    setComments((prevComments) => [...prevComments, commentData]);
  };

  const handleToggleSection = (section) => {
    if (section === 'tech') {
      setShowTechSection(true);
      setActiveFilter('tech');
    } else if (section === 'comments') {
      setShowTechSection(false);
      setActiveFilter('comments');
    }
  };

  if (!tech || !comments) {
    return <Navigate to="/findmyat" />;
  }


  return (
    <div className='Results'>
      <div  className='results-cont'>
        <div className='results-headings'>
          <h1 onClick={() => handleToggleSection('tech')} className={activeFilter === 'tech' ? 'result-head active-filter' : 'result-head'}>A.I. Suggested Tech</h1>
          <h1 onClick={() => handleToggleSection('comments')}  className={activeFilter === 'comments' ? 'result-head active-filter' : 'result-head'}>Community Comments</h1>
        </div>
        <div className='results-section'>
          {showTechSection && (
              <TechList tech={tech} onCommentSubmit={handleCommentSubmit} category={category} />
          )}
          {!showTechSection && (
              <CommentSection comments={comments} category={category}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default Results;


//eventually we will use params to make sure this page persists on reload, using index position for the tech param