import React, { useState } from 'react';
import './CommentForm.css';

function CommentForm({ title, link, techPiece, category, description, onCommentSubmit }) {
  const [rating, setRating] = useState(null); 
  const [formData, setFormData] = useState({
    link: '',
    category: '',
    description: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  

    if (
      !techPiece.title ||
      !techPiece.website ||
      !category ||
      !techPiece.description ||
      !formData.comment
    ) {
      alert('Please fill out all required fields.');
      return; 
    }
  
    const submittedData = {
      ...techPiece,
      website: techPiece.website,
      category: category,
      description: techPiece.description,
      rating: rating,
      comment: formData.comment
    };
  
    console.log('form', submittedData);
    setFormData({
      link: '',
      category: '',
      description: '',
      comment: ''
    })

  };

  return (
    <div className='Comment-form'>
      <form onSubmit={handleSubmit}>
        <label>
          <input className='hardcoded' type="text" name="title" value={techPiece.title} readOnly />
        </label>
        <label className='hide'>
          Link:
          <input type="text" name="link" value={techPiece.website} onChange={handleChange} readOnly/>
        </label>
        <label className='hide'>
          Category:
          <input type="text" name="category" value={category} onChange={handleChange} readOnly/>
        </label>
        <label className='hide'>
          Description:
          <textarea
            name="description"
            value={techPiece.description}
            onChange={handleChange}
            readOnly
          />
        </label>
        <label>
          Comment:
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          />
        </label>
          <div className='rating-btns'>
            <button type="button" className={rating ? 'liked' : ''} onClick={() => handleRating(true)}>I like it</button>
            <button type="button" className={!rating ? 'unliked' : ''} onClick={() => handleRating(false)}>I don't like it</button>
          </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
