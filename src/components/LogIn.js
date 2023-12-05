import './LogIn.css'
import { useState } from 'react'

function LogIn ( {isOpen, onClose, onLogin} ) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrorMessage, setLoginErrorMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.length || !password.length) {
      setLoginErrorMessage("Form is incomplete. All fields need to be filled in.");
      return;
    }
    onLogin(email, password);
  };

  if (!isOpen) return null; 

  return (
    <div className='login'>
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
        {loginErrorMessage && <div className='login-error-message'> {loginErrorMessage}</div>}
        </form>


    </div>
  )
}

export default LogIn