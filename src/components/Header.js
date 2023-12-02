import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <div className='logo-title-container'>
          <img src='help.png' className='help-logo' alt='Helping Hands Logo' />

          <div className='title-container'>
            <h1 className='title'>AI AT Ally</h1>
            <p className='header-title'>
              <em>Artificial Intelligence Assistive Tech </em>
            </p>
          </div>
        </div>
      </Link>

      <div className='button-container'>
        <button className='about-button'>ABOUT</button>
        <button className='sign-in-button'>SIGN IN</button>
      </div>
    </header>
  );
}

export default Header;
