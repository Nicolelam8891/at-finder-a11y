import './Results.css'
import React, { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import TechList from './TechList';
import CommentSection from './CommentSection';

function Results({ tech, comments }) {
  const navigate = useNavigate();

  if (!tech || !comments) {
    // Redirect to '/'
    return <Navigate to="/findmyat" />;
  }

  // useEffect(() => {
  //   if (!tech || !comments) {
  //     navigate('/');
  //   }
  // }, [tech, comments, navigate]);

  return (
    <div>
      <TechList tech={tech} />
      <CommentSection comments={comments} />
    </div>
  );
}

export default Results;
