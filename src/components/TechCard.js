import React, { useState } from 'react';
import './TechCard.css';
import CommentForm from './CommentForm'; 

function TechCard({ title, website, techPiece, onCommentSubmit, category, currentUser }) {
  const [showCommentForm, setShowCommentForm] = useState(false);

  const handleTechClick = () => {
    setShowCommentForm(true);
  };

  const handleCommentSubmit = (commentData) => {
    onCommentSubmit(commentData);
    setShowCommentForm(false);
  };



  return (
    <div className='tech-coll'>
      <div onClick={handleTechClick} className='Tech-card'>
        <h3>{techPiece.title}</h3>
        {/* <p>{website}</p> */}
        <p>{techPiece.description}</p>
      </div>
      {showCommentForm && <CommentForm currentUser={currentUser} techPiece={techPiece} onCommentSubmit={handleCommentSubmit} category={category}/>} 
    </div>
  );
}

export default TechCard;
