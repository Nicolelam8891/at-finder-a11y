import './Contributor.css'
import github from '../assets/github.png';
import Linkedin from '../assets/Linkedin.png';

function Contributor({ name, role, bio, imageUrl, altText, githubUrl, linkedinUrl }) {
  return (
    <div className="contributor-card">
      <img src={imageUrl} alt={`Headshot of ${name}`} className="contributor-image" />
      <h3>{name}</h3>
        <div className='contributor-card-info'>
          <p><em>{role}</em></p>
          <p>{bio}</p>
        </div>
        <div className="social-links">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className='github-image'/>
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <img src={Linkedin} alt="LinkedIn" className='linkedin-image'/>
        </a>
      </div>
    </div>
  );
}

export default Contributor;