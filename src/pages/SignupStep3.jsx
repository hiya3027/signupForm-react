import PasswordInput from "../components/PasswordInput";
import PasswordValidation from "../components/PasswordValidation";
import { useEffect, useState } from "react";
import "../index.css";
export default function SignupStep3({ data, onChange, nextStep, prevStep }) {
  const [validations, setValidations] = useState({
    upper: false,
    lower: false,
    number: false,
    special: false,
    length: false,
    match: false
  });

  useEffect(() => {
    const pass = data.password;
    const confirm = data.confirmPassword;
    setValidations({
      upper: /[A-Z]/.test(pass),
      lower: /[a-z]/.test(pass),
      number: /[0-9]/.test(pass),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(pass),
      length: pass.length === 8,
      match: pass === confirm && confirm !== ""
    });
  }, [data.password, data.confirmPassword]);

  return (
    <div className="step-content fade-in">
      <PasswordInput
        label="Password:"
        value={data.password}
        onChange={(e) => onChange("password", e.target.value)}
        placeholder="Enter your password"
      />

      <PasswordInput
        label="Confirm Password:"
        value={data.confirmPassword}
        onChange={(e) => onChange("confirmPassword", e.target.value)}
        placeholder="Re-enter your password"
      />

      <PasswordValidation validations={validations} />

      <div className="button-group">
        <button type="button" onClick={prevStep}>Back</button>
        <button
          type="button"
          onClick={nextStep}
          disabled={!Object.values(validations).every(Boolean)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
