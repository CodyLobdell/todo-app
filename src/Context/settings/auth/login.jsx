import React from 'react';
import { AuthContext } from './index';
function Login() {

  const { isLoggedIn, logout, login } = React.useContext(AuthContext);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  }

  return (
    <div id="app-login">
      {isLoggedIn
        ? <button onClick={logout}>Logout</button>
        : <form onSubmit={handleSubmit}>
          <input onChange={(e) => setUsername(e.target.value)} name={username} placeholder='enter a username'/>
          <input onChange={(e) => setPassword(e.target.value)} name={password} placeholder='enter your password'/>
          <button type="submit">Login</button>
        </form>
      }
    </div>
  )
}

export default Login;