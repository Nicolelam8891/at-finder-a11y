import './CommentCard.css'

function CommentCard ({comment}) {
  return (
    <div className='container'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={comment.rating === true ? 'liked-comment commentcard' : 'disliked-comment commentcard'}><path className="primary" d="M2 15V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v15a1 1 0 0 1-1.7.7L16.58 17H4a2 2 0 0 1-2-2z"/><path className="secondary" d="M6 7h12a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2zm0 4h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2z"/></svg>
      <div className='containerText'>
      <p>{comment.category}</p>
      <p>{comment.title}</p>
      <p>{comment.userComment}</p>
      </div>
    </div>
  )
}

export default CommentCard

{/* title: "title 1",
      link: "www.google.com",
      category: "Blindness",
      description: "string",
      userComment: "This is my comment. I hate this technology! Booo!",
      rating: false,
      userRecommended: false, 
      id: 2 */}