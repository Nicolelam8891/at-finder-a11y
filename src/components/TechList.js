import './TechList.css'
import TechCard from './TechCard'

function TechList ({tech}) {
  return (
    <div>
      {tech.map((techPiece) =>
        <TechCard 
          key={techPiece.title}
          title={techPiece.title}
        />
      )

      }
    </div>
  )
}

export default TechList