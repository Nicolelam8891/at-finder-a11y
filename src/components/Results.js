import './Results.css'
import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import TechList from './TechList';
import CommentSection from './CommentSection';
// import comments from '../mockData/comments';

function Results({ tech, techComments, category }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
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
      <TechList tech={tech} onCommentSubmit={handleCommentSubmit} category={category}/>
      <CommentSection comments={comments} category={category}/>
      </div>
    </div>
  );
}

export default Results;


//eventually we will use params to make sure this page persists on reload, using index position for the tech param