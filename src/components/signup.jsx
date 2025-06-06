import React, { useState, useEffect, useRef} from 'react';
import Login from './Login.jsx';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

export default function Signup() {
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDob]=useState('');
  const [country,setCountry] = useState('');
  
  const [validations, setValidations] = useState({
    upper: false,
    lower: false,
    number: false,
    special: false,
    length: false,
    match: false,
  });

  useEffect(() => {
    setValidations({
        upper : password.match(/[A-Z]/) !== null,
        lower : password.match(/[a-z]/) !== null,
        number : password.match(/[0-9]/) !== null,
        special : password.match(/[!@#$%^&*(),.?":{}|<>]/) !== null,
        length :password.length === 8,  
        match: password === confirmPassword && confirmPassword !== '',
    });
  }, [password, confirmPassword]);

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!phoneNumber || !dob || !country) {
    alert('Please fill all fields.');
    return;
  }

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
          <input className='inputField' type="email" placeholder="Enter your email"     value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" className="inputField" 
          onChange={(e)=> setPhoneNumber(e.target.value)} 
          value={phoneNumber}
          placeholder="Enter 10-digit number" 
          pattern="[0-9]{10}"
           required />
        </label>

        <label>
          Date of Birth:
          <input type="date" className="inputField" 
          value={dob}
          onChange={(e)=> setDob(e.target.value)} required />
        </label>

        <label>
          Country:
          <select className="inputField" value={country}
          onChange={(e)=>setCountry(e.target.value)} required>

            <option value="">Select your country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
          </select>
        </label>

        <label>
          Password:
          <div style={{ position: 'relative' }}>
            <input className='inputField' type={showPassword ? 'text' : 'password'} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required maxLength={8} minLength={8} />

            <span onClick={() => setShowPassword(!showPassword)} className='show-password'>

              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </label>

        <label>
          Confirm Password:
          <div style={{ position: 'relative' }}>
            <input className='inputField' type={showPassword ? 'text' : 'password'}
              placeholder="Confirm your password" value={confirmPassword}
               onChange={(e) => setConfirmPassword(e.target.value)} required 
               maxLength={8} minLength={8}/>

            <span onClick={() => setShowPassword(!showPassword)} className='show-password'>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </label>

        <button type="submit" disabled={!Object.values(validations).every(v => v)}>
          Signup
        </button>
      </form>

      <div className="password-errors">
        {!validations.upper && 
        <p>• Password must have at least one uppercase letter.</p>}

        {!validations.lower &&
        <p>• Password must have at least one lowercase letter.</p>}

        {!validations.number && 
        <p>• Password must have at least one number.</p>}

        {!validations.special && 
        <p>• Password must have at least one special character.</p>}

        {!validations.length && 
        <p>• Password must be exactly 8 characters long.</p>}

        {!validations.match && confirmPassword !== '' && 
        <p>• Passwords must match.</p>}
      </div>
    </div>
  );
}
