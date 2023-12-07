import './TechList.css'
import TechCard from './TechCard'

function TechList ({tech, onCommentSubmit, category}) {
  return (
    <div>
      <h1>Tech List</h1>
      {tech.map((techPiece) =>
        <TechCard 
          key={techPiece.attributes.title}
          techPiece={techPiece.attributes}
          website={techPiece.attributes.website}
          onCommentSubmit={onCommentSubmit} 
          category={category}
        />
      )

      }
    </div>
  )
}

export default TechList