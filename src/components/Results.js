import './Results.css'
import TechList from './TechList'
import CommentSection from './CommentSection'


function Results ({tech}) {
  return (
    <div>
      <TechList tech={tech}/>
      <CommentSection />
    </div>
  )
}

export default Results