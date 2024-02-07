
import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const nav=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can add authentication logic here
    console.log('Logging in with:', username, password);
    // Example: Perform API call for authentication
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            placeholder={username}
            onChange={(e) => setUsername(e.target.placeholder)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            placeholder={password}
            onChange={(e) => setPassword(e.target.placeholder)}
          />
        </label>
        <br />
        <button type="button" onClick={() => nav('/home')}>
          Login
        </button><br></br>
        <button type="button" onClick={() => nav('/sign')}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Login;



