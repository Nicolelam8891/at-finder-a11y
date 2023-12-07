import './Results.css'
import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import TechList from './TechList';
import CommentSection from './CommentSection';
// import comments from '../mockData/comments';

function Results({ tech, techComments, category }) {
  const [comments, setComments] = useState([]);
  const [showTechSection, setShowTechSection] = useState(true);
  

  useEffect(() => {
    setComments(techComments);
  }, []);

  const handleCommentSubmit = (commentData) => {
    setComments((prevComments) => [...prevComments, commentData]);
  };

  const handleToggleSection = (section) => {
    if (section === 'tech') {
      setShowTechSection(true);
    } else if (section === 'comments') {
      setShowTechSection(false);
    }
  };

  if (!tech || !comments) {
    return <Navigate to="/findmyat" />;
  }


  return (
    <div className='Results'>
      <div  className='results-cont'>
        <div className='results-headings'>
          <h1 onClick={() => handleToggleSection('tech')}>AI Suggested Tech</h1>
          <h1 onClick={() => handleToggleSection('comments')}>Community Comments</h1>
        </div>
        {showTechSection && (
            <TechList tech={tech} onCommentSubmit={handleCommentSubmit} category={category} />
        )}
        {!showTechSection && (
            <CommentSection comments={comments} category={category}/>
        )}
      </div>
    </div>
  );
}

export default Results;


//eventually we will use params to make sure this page persists on reload, using index position for the tech param