
/*import React, { useState } from 'react';
import './SignUpPage.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const nav=useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showInvalidEmailPopup, setShowInvalidEmailPopup] = useState(false);

  const handleSignup = () => {
    // Check if the email is valid
    if (!isValidEmail(email)) {
      setShowInvalidEmailPopup(true);
      return;
    }

    // Continue with signup logic if email is valid
    console.log('Signing up with:', username, email, password);
    // Example: Perform API call for user registration
  };

  const isValidEmail = (email) => {
    // Simple email validation logic, you can enhance it based on your requirements
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const closePopup = () => {
    setShowInvalidEmailPopup(false);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={() => nav('/home')}>
          Sign Up
        </button>
      </form>

      {showInvalidEmailPopup && (
        <div className="popup">
          <p>Invalid email address. Please enter a valid email.</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Signup;
*/
// SignUpPage.jsx

/*import React, { useState } from 'react';
import './SignUpPage.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const nav = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showInvalidEmailPopup, setShowInvalidEmailPopup] = useState(false);

  const handleSignup = () => {
    // Check if the email is valid
    nav('/home')
    if (!isValidEmail(email)) {
      setShowInvalidEmailPopup(true);
      return;
    }

    // Continue with signup logic if email is valid
    console.log('Signing up with:', username, email, password);
    // Example: Perform API call for user registration
  };

  const isValidEmail = (email) => {
    // Simple email validation logic, you can enhance it based on your requirements
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const closePopup = () => {
    setShowInvalidEmailPopup(false);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>

      {showInvalidEmailPopup && (
        <div className="popup">
          <p>Invalid email address. Please enter a valid email.</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Signup;*/
// SignUpPage.jsx
import React, { useState } from 'react';
import './SignUpPage.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const nav = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showInvalidEmailPopup, setShowInvalidEmailPopup] = useState(false);

  const handleSignup = () => {
    // Check if the email is valid
    if (!isValidEmail(email)) {
      setShowInvalidEmailPopup(true);
      return;
    }

    // Continue with signup logic if email is valid
    console.log('Signing up with:', username, email, password);
    // Example: Perform API call for user registration

    // Navigate to the home page
    nav('/home');
  };

  const isValidEmail = (email) => {
    // Simple email validation logic, you can enhance it based on your requirements
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const closePopup = () => {
    setShowInvalidEmailPopup(false);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>

      {showInvalidEmailPopup && (
        <div className="popup">
          <p>Invalid email address. Please enter a valid email.</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Signup;
