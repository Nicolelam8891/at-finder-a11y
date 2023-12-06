import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from 'react'
import LogIn from "./LogIn";
import users from "../mockData/userData";

function Header({ currentUser, setCurrentUser, handleButtonClick}) {

  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
   const user = users.find(user => user.email === username && user.password === password);
   if (user) {
    console.log('Logged in as:', user.name);
    setIsLoggedIn(true);
    setCurrentUser(user);
    setLoginOpen(false);
   } else {
    console.log('Invalid credentials')
   }
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


      <div className="login-button-container">
        {!isLoggedIn && (
          <button className="login-button" onClick={() => setLoginOpen(true)}>Log In</button>
          )}
        {isLoggedIn && currentUser && <p>Welcome, {currentUser.name}! You have successfully logged in!</p>}

        <LogIn 
          isOpen={isLoginOpen}
          onLogin={handleLogin}
        />
          <button className='about-button' onClick={() => handleButtonClick('/about')}>About</button>
      </div>

      </div>
    </header>
  );
}

export default Header;
