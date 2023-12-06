import React, { useState } from 'react';
import './CommentForm.css';

function CommentForm({ title, link, techPiece, category, description, onCommentSubmit }) {
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
    onCommentSubmit(formData);
    setFormData({
      link: '',
      category: '',
      description: '',
    });
  };
  console.log('cat', category)


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={techPiece.title} readOnly />
        </label>
        <label>
          Link:
          <input type="text" name="link" value={techPiece.title} onChange={handleChange} readOnly/>
        </label>
        <label>
          Category:
          <input type="text" name="category" value={category} onChange={handleChange} />
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
