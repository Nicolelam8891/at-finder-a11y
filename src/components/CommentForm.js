import React, { useState } from 'react';
import './CommentForm.css';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../GraphQL/Mutations';

function CommentForm({ title, link, techPiece, category, description, onCommentSubmit }) {
  const [commentCreate] = useMutation(ADD_COMMENT);
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


  // const addComment = async (submittedData) => {
  //   try {
  //     const {data} = await commentCreate({variables: {title, link, description, userComment, rating, categoryId, userId}})

  //     if(onCommentSubmit) {
  //       onCommmentSubmit(data.commentCreate)
  //       console.log("DATA", data.commentCreate)
  //     }
  //   }
  //   catch (error) {
  //     console.error("Mutation error:", error.message);
  //     setLoginErrorMessage("We're sorry. An error occurred. Please try again.");
  //   }
  // }


  const addComment = async (submittedData) => {
    try {
      const { data } = await commentCreate({
        variables: {
          title: submittedData.title,
          link: submittedData.link,
          description: submittedData.description,
          userComment: submittedData.userComment,
          rating: submittedData.rating,
          category: submittedData.categoryId,
          userId: submittedData.userId,
        },
      });
  
      if (data.commentCreate && !data.commentCreate.errors) {
        if (onCommentSubmit) {
          onCommentSubmit(data.commentCreate);
          console.log("DATA", data.commentCreate);
        }
      } else {
        console.error("Mutation error:", data.commentCreate.errors);
        // Handle error, set error message, etc.
      }
    } catch (error) {
      console.error("Mutation error:", error.message);
      // Handle error, set error message, etc.
    }
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
      link: techPiece.website,
      description: techPiece.description,
      userComment: formData.comment,
      rating: rating,
      categoryId: category,
      userId: 1
    };

    addComment(submittedData)
  
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
