import React, { useState } from 'react';
import './TechCard.css';
import CommentForm from './CommentForm'; 

function TechCard({ title, onCommentSubmit }) {
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
      <h3 onClick={handleTechClick}>{title}</h3>
      {showCommentForm && <CommentForm title={title} onCommentSubmit={handleCommentSubmit}/>} 
    </div>
  );
}

export default TechCard;
