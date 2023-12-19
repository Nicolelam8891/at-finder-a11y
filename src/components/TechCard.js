import React, { useState } from 'react';
import './TechCard.css';
import CommentForm from './CommentForm'; 
import { Link } from 'react-router-dom';

function TechCard({ title, website, techPiece, onCommentSubmit, category, currentUser }) {
  const [showCommentForm, setShowCommentForm] = useState(false);

  const handleTechClick = () => {
    setShowCommentForm(true);
  };

  const handleCommentSubmit = (commentData) => {
    setShowCommentForm(false);
    onCommentSubmit(commentData);
  };



  return (
    <div className='tech-coll'>
      <div onClick={handleTechClick} className='Tech-card'>
        <h3>{techPiece.title}</h3>
        <Link to={website} target="_blank">More Info</Link>
        <p>{techPiece.description}</p>
        <button  onClick={handleTechClick} >Comment</button>
      </div>
      {showCommentForm && <CommentForm currentUser={currentUser} techPiece={techPiece} onCommentSubmit={handleCommentSubmit} category={category} setShowCommentForm={setShowCommentForm}/>} 
    </div>
  );
}

export default TechCard;
