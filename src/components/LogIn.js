import './Login.css'

function Login ( {isOpen, onClose, onLogin} ) {
  cons [username, setUserName] = useState('');
  cons [password, setPassword] = useState('');

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
            onChange={(event) => setUsername(e.target.value)}
          />
          <input 
            type="text"
            placeholder="password"
            value={passwprd}
            onChange={(event) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <button onClick={onClose}>Close</button>
        </form>

    </div>
  )
}

export default Login