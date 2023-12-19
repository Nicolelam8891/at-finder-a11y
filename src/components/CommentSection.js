import './CommentSection.css'
import CommentCard from './CommentCard'

function CommentSection ({comments}) {
  console.log('COMMENTS ===', comments)
  
  return (
    <div className='Tech-list'>
      {comments.map((comment) =>
        <CommentCard comment={comment} key={comment.id}/>
      )
      }
    </div>
  )
}

export default CommentSection


