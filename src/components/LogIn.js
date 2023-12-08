import './LogIn.css'
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client';
import { SESSION_CREATE } from '../GraphQL/Mutations';

function LogIn({ isOpen, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrorMessage, setLoginErrorMessage] = useState('');

  const [sessionCreate, { loading, error }] = useMutation(SESSION_CREATE);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.length || !password.length) {
      setLoginErrorMessage("Form is incomplete. All fields need to be filled in.");
      return;
    }

    sessionCreate({ variables: { email, password } });
  };

  // If the login form is not open, don't render anything
  if (!isOpen) return null;

  // Handle loading and error states here
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
          type="password" // Changed to 'password' for security
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
        {loginErrorMessage && <div className='login-error-message'> {loginErrorMessage}</div>}
      </form>
    </div>
  );
}

export default LogIn;