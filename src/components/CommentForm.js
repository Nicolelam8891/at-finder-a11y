import React, { useState } from 'react';
import './CommentForm.css';

function CommentForm({ title, link, category, description, onCommentSubmit }) {
  const [formData, setFormData] = useState({
    link: '',
    category: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Pass the commentData up to the parent component
    onCommentSubmit(formData);
    // Optionally, reset the form
    setFormData({
      link: '',
      category: '',
      description: '',
    });
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={title} readOnly />
        </label>
        <label>
          Link:
          <input type="text" name="link" value={formData.link} onChange={handleChange} />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={formData.category} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentForm;
