import './TechList.css'
import TechCard from './TechCard'

function TechList ({tech, onCommentSubmit}) {
  return (
    <div>
      <h1>Tech List</h1>
      {tech.map((techPiece) =>
        <TechCard 
          key={techPiece.title}
          title={techPiece.title}
          onCommentSubmit={onCommentSubmit} 
        />
      )

      }
    </div>
  )
}

export default TechList