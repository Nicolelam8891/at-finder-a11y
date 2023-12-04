import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from 'react'
import LogIn from "./LogIn";

function Header() {

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    console.log('Login with:', username, password);
    setIsLoggedIn(true);
    setLoginModalOpen(false);
  }

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
        <button className='about-button'>About</button>
      <div className="log-in-button">
        {!isLoggedIn && (
          <button onClick={() => setLoginModalOpen(true)}>Log In</button>
        )}
        {isLoggedIn && <p>Welcome to AI AT Ally, you have successfully logged in!</p>}
        <LogIn 
          isOpen={isLoginModalOpen}
          onClose={() => setLoginModalOpen(false)}
          onLogin={handleLogin}
        />
      </div>
      </div>
    </header>
  );
}

export default Header;
