import './Results.css'
import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import TechList from './TechList';
import CommentSection from './CommentSection';
// import comments from '../mockData/comments';

function Results({ tech, techComments }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Load comments from some source, e.g., an API or local storage
    // For demonstration purposes, comments are set to an empty array initially
    setComments(techComments);
  }, []);

  const handleCommentSubmit = (commentData) => {
    setComments((prevComments) => [...prevComments, commentData]);
  };

  if (!tech || !comments) {
    return <Navigate to="/findmyat" />;
  }


  return (
    <div className='Results'>
      <div  className='results-cont'>
      <TechList tech={tech} onCommentSubmit={handleCommentSubmit}/>
      <CommentSection comments={comments} />
      </div>
    </div>
  );
}

export default Results;


//eventually we will use params to make sure this page persists on reload, using index position for the tech param