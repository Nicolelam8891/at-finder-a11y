import './TechList.css'
import TechCard from './TechCard'

function TechList ({tech}) {
  return (
    <div>
      <h1>Tech List</h1>
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