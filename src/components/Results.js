import './Results.css'
import TechList from './TechList'
import CommentSection from './CommentSection'


function Results ({tech, comments}) {

  console.log('bop', comments)
  
  return (
    <div>
      <TechList tech={tech}/>
      <CommentSection comments={comments}/>
    </div>
  )
}

export default Results