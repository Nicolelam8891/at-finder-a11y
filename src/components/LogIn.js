import './LogIn.css'
import { useState } from 'react'

function LogIn ( {isOpen, onClose, onLogin} ) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(email, password);
  };

  if (!isOpen) return null; 

  return (
    <div className='login-modal'>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input 
            type="text"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Login</button>
        </form>

    </div>
  )
}

export default LogIn