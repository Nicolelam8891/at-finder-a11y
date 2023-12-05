import React, { useState } from 'react';
import './TechCard.css';
import CommentForm from './CommentForm'; // Updated import statement

function TechCard({ title, onCommentSubmit }) {
  const [showCommentForm, setShowCommentForm] = useState(false);

  const handleTechClick = () => {
    setShowCommentForm(true);
  };

  const handleCommentSubmit = (commentData) => {
    // Pass the commentData up to the parent component
    onCommentSubmit(commentData);
    // Optionally, hide the CommentForm after submission
    setShowCommentForm(false);
  };



  return (
    <div>
      <h3 onClick={handleTechClick}>{title}</h3>
      {showCommentForm && <CommentForm title={title} onCommentSubmit={handleCommentSubmit}/>} {/* Updated component name */}
    </div>
  );
}

export default TechCard;
