import './TechList.css'
import TechCard from './TechCard'

function TechList ({tech, onCommentSubmit, category}) {
  return (
    <div>
      <h1>Tech List</h1>
      {tech.map((techPiece) =>
        <TechCard 
          key={techPiece.title}
          techPiece={techPiece}
          onCommentSubmit={onCommentSubmit} 
          category={category}
        />
      )

      }
    </div>
  )
}

export default TechList