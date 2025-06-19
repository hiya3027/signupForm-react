import React from "react";
import "../index.css";

export default function SignupStep1({ formData, onChange, nextStep }) {
  const isStepValid =
    formData.email.trim() !== "" &&
    formData.phoneNumber.trim().length === 10 &&
    formData.dob.trim() !== "";

  return (
    <div className="step-content fade-in">
      <label>
        Email:
        <input
          className="inputField"
          type="email"
          value={formData.email}
          onChange={(e) => onChange("email", e.target.value)}
          placeholder="Enter your email"
          required
        />
      </label>

      <label>
        Phone Number:
        <input
          className="inputField"
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) => onChange("phoneNumber", e.target.value)}
          placeholder="Enter 10-digit number"
          pattern="[0-9]{10}"
          required
        />
      </label>

      <label>
        Date of Birth:
        <input
          className="inputField"
          type="date"
          value={formData.dob}
          onChange={(e) => onChange("dob", e.target.value)}
          required
        />
      </label>

      <div className="button-group">
        <button type="button" onClick={nextStep} disabled={!isStepValid}>
          Next
        </button>
      </div>
    </div>
  );
}
