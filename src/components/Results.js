import './Results.css'
import React, { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import TechList from './TechList';
import CommentSection from './CommentSection';

function Results({ tech, comments }) {
  // const navigate = useNavigate();

  if (!tech || !comments) {
    return <Navigate to="/findmyat" />;
  }


  return (
    <div className='Results'>
      <div  className='results-cont'>
      <TechList tech={tech} />
      <CommentSection comments={comments} />
      </div>
    </div>
  );
}

export default Results;


//eventually we will use params to make sure this page persists on reload, using index position for the tech param