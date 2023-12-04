import './LogIn.css'
import { useState } from 'react'

function LogIn ( {isOpen, onClose, onLogin} ) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
  };

  if (!isOpen) return null; 

  return (
    <div className='login-modal'>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="username"
            value={username}
            onChange={(event) => setUserName(event.target.value)}
          />
          <input 
            type="text"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Login</button>
          <button onClick={onClose}>Close</button>
        </form>

    </div>
  )
}

export default LogIn