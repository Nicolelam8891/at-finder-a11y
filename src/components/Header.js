import './Header.css'
import { Link } from 'react-router-dom';

function Header () {
  return (
    <header className="header">
       <h1 className='header-title'>AI AT Ally</h1>
      <div className='logo-title-container'></div>
      <Link to='/'>
      <img src="help.png" className="help-logo" alt="Helping Hands Logo" />
      </Link>
      <p className='header-title'>
        <em>Artificial Intelligence Assistive Tech </em>
      </p>
    </header>
    
  )
}

export default Header