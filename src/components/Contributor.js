import './Contributor.css'

function Contributor({ name, role, bio, imageUrl }) {
  return (
    <div className="contributor-card">
      <img src={imageUrl} alt={`Headshot of ${name}`} className="contributor-image" />
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{bio}</p>
    </div>
  );
}

export default Contributor;