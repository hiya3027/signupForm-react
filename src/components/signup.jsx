import React, { useState, useEffect } from 'react';
import Login from './Login.jsx'; 

export default function Signup() {
  const [password, setPassword] = useState('');

  const [isSignUp, setIsSignUp] = useState(false); 
  const [validations, setValidations] = useState({
    upper: false,
    lower: false,
    number: false,
    special: false,
    length: false,
  });

  useEffect(() => {
    setValidations({
        upper : password.match(/[A-Z]/) !== null,
        lower : password.match(/[a-z]/) !== null,
        number : password.match(/[0-9]/) !== null,
        special : password.match(/[!@#$%^&*(),.?":{}|<>]/) !== null,
        length :password.length === 8,  
    });
  }, [password]);

  const handleSubmit = (e) => {
  e.preventDefault();
  if (Object.values(validations).every(value => value)) {
    alert('Signup successful!');
    setIsSignUp(true);
  } else {
    alert('Please enter a strong password.');
  }
};

if (isSignUp) {
    return <Login />;
}

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" required />
        </label>

        <label>
          Password:
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            maxLength={8} 
            minLength={8}
          />
        </label>

        <button type="submit">Signup</button>
      </form>

      <div className="validation-box">
        <p>Password should contain:</p>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" readOnly checked={validations.upper} />
            One uppercase letter
          </label><br/>
          <label>
            <input type="checkbox" readOnly checked={validations.lower} />
            One lowercase letter
          </label><br/>
          <label>
            <input type="checkbox" readOnly checked={validations.number} />
            One number (0-9)
          </label><br/>
          <label>
            <input type="checkbox" readOnly checked={validations.special} />
            One special character
          </label><br/>
          <label>
            <input type="checkbox" readOnly checked={validations.length} />
            At least 8 characters
          </label>
        </div>
      </div>
    </div>
  );
}
