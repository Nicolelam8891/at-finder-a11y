import './LogIn.css'
import { useState } from 'react'
import { useMutation } from '@apollo/client';
import { SESSION_CREATE } from '../GraphQL/Mutations';

function LogIn({ isOpen, onLogin, setCurrentUser, onClose, response }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [sessionCreate] = useMutation(SESSION_CREATE);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginErrorMessage('')
    if (!email.length || !password.length) {
      setLoginErrorMessage("Form is incomplete. All fields need to be filled in.");
      return;
    }
  
    try {
      const { data } = await sessionCreate({ variables: { email, password } });
      if (onLogin) {
        onLogin(data.sessionCreate);
        setCurrentUser(data)
      }
    } catch (error) {
      console.error("Mutation error:", error.message);
      setLoginErrorMessage("We're sorry. An error occurred during login. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className='modal'>
    <div className='modal-content'>
    <div className='login'>
      <span className='close-button' onClick={onClose}>×</span>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
        <input 
          type="text"
          id="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        </label>
        <label htmlFor="password">
        <input 
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        </label>
        <button className="submit-button" type="submit">Login</button>
        {loginErrorMessage && <div className='login-error-message'> {loginErrorMessage}</div>}
        {response && <p>{response}</p>}
      </form>
    </div>
    </div>
    </div>
  );
}

export default LogIn;