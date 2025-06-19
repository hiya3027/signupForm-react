import React, { useState } from "react";
import "../index.css";
import SignupStep1 from "./SignupStep1";
import SignupStep2 from "./SignupStep2";
import SignupStep3 from "./SignupStep3";
import SignupStep4 from "./SignupStep4";
import Login from "./Login";

export default function Signup() {
  const [step, setStep] = useState(1);
  const [isSignUpComplete, setIsSignUpComplete] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    dob: "",
    country: "",
    state: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    if (step < 4) setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    setIsSignUpComplete(true);
  };

  if (isSignUpComplete) {
    return <Login />;
  }

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <p>Complete the steps below to create your account.</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${(step - 1) * 33}%` }} />
      </div>

      <div className="step-indicator">Step {step} of 4</div>

      {step === 1 && (
        <SignupStep1
          formData={formData}
          onChange={handleChange}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <SignupStep2
          data={formData}
          onChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 3 && (
        <SignupStep3
          data={formData}
          onChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 4 && (
        <SignupStep4
          data={formData}
          prevStep={prevStep}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
