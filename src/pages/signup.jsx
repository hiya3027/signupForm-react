import React, { useState, useEffect} from "react";
import "../index.css";

import Login from "./Login.jsx";
import PasswordInput from "../components/PasswordInput.jsx";
import PasswordValidation from "../components/PasswordValidation.jsx";


export default function Signup() {  
  const locationData = {
    India: {
      Gujarat: ["Ahmedabad", "Surat", "Rajkot"],
      Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    },
    USA: {
      California: ["Los Angeles", "San Francisco"],
      Texas: ["Dallas", "Houston"],
    },
    Canada: {
      Ontario: ["Toronto", "Ottawa"],
      Quebec: ["Montreal", "Quebec City"],
    },
    UK: {
      England: ["London", "Manchester"],
      Scotland: ["Edinburgh", "Glasgow"],
    },
    Australia: {
      Victoria: ["Melbourne", "Geelong"],
      NSW: ["Sydney", "Newcastle"],
    },
  };

  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");

  const [state, setState] = useState("");
  const [city, setCity] = useState("");

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
      upper: password.match(/[A-Z]/) !== null,
      lower: password.match(/[a-z]/) !== null,
      number: password.match(/[0-9]/) !== null,
      special: password.match(/[!@#$%^&*(),.?":{}|<>]/) !== null,
      length: password.length === 8,
      match: password === confirmPassword && confirmPassword !== "",
    });
  }, [password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phoneNumber || !dob || !country || !state || !city) {
      alert("Please fill all fields.");
      return;
    }

    if (Object.values(validations).every((value) => value)) {
      alert("Signup successful!");
      setIsSignUp(true);
    } else {
      alert("Please enter a strong password.");
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
          <input
            className="inputField"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            className="inputField"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            placeholder="Enter 10-digit number"
            pattern="[0-9]{10}"
            required
          />
        </label>

        <label>
          Date of Birth:
          <input
            type="date"
            className="inputField"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </label>

        <label>
          Country:
          <select
            className="inputField"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="">Select your country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
          </select>
        </label>

        <label>
          State:
          <select
            className="inputField"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
              setCity(""); 
            }}
            required
            disabled={!country}
          >
            <option value="">Select your state</option>
            {country &&
              Object.keys(locationData[country]).map((stateName) => (
                <option key={stateName} value={stateName}>
                  {stateName}
                </option>
              ))}
          </select>
        </label>

        <label>
          City:
          <select
            className="inputField"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            disabled={!state}
          >
            <option value="">Select your city</option>
            {state &&
              locationData[country][state].map((cityName) => (
                <option key={cityName} value={cityName}>
                  {cityName}
                </option>
              ))}
          </select>
        </label>

        <PasswordInput 
          label="Password:"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <PasswordInput 
          label="Confirm Password:"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Re-enter your password"
        />

        <button
          type="submit"
          disabled={!Object.values(validations).every((value) => value)}
        >
          Signup
        </button>
      </form>

     <PasswordValidation validations={validations} />
    </div>
  );
}
