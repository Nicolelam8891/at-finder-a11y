import './CommentSection.css'
import CommentCard from './CommentCard'
import { useEffect } from 'react'

function CommentSection ({comments}) {
  console.log('COMMENTS ===', comments)

  useEffect(() => {
    document.title = 'Community Comments Page - AI AT Ally';
  }, [])
  
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


