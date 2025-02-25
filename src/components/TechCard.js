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
        <a href={website} target="_blank" rel="noopener noreferrer" className="learnat-a">More Info <span className="sr-only">about {techPiece.title}</span></a>
        <p>{techPiece.description}</p>
        <button className='comment-button' onClick={handleTechClick} >Comment</button>
      </div>
      {showCommentForm && <CommentForm currentUser={currentUser} techPiece={techPiece} onCommentSubmit={handleCommentSubmit} category={category} setShowCommentForm={setShowCommentForm}/>} 
    </div>
  );
}

export default TechCard;
