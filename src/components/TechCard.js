import React, { useState } from 'react';
import './TechCard.css';
import CommentForm from './CommentForm'; 

function TechCard({ title, techPiece, onCommentSubmit, category }) {
  const [showCommentForm, setShowCommentForm] = useState(false);

  const handleTechClick = () => {
    setShowCommentForm(true);
  };

  const handleCommentSubmit = (commentData) => {
    onCommentSubmit(commentData);
    setShowCommentForm(false);
  };



  return (
    <div>
      <h3 onClick={handleTechClick}>{techPiece.title}</h3>
      <p>{techPiece.link}</p>
      <p>{techPiece.description}</p>
      {showCommentForm && <CommentForm techPiece={techPiece} onCommentSubmit={handleCommentSubmit} category={category}/>} 
    </div>
  );
}

export default TechCard;
