import './CommentCard.css'

function CommentCard ({comment}) {
  return (
    <div className={comment.rating === true ? 'liked-comment commentcard' : 'disliked-comment commentcard'}>
      <p>{comment.category}</p>
      <p>{comment.title}</p>
      <p>{comment.userComment}</p>
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