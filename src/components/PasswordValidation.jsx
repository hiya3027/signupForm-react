import React from "react";
import "../index.css";

export default function PasswordValidation({ validations }) {
  return (
    <>
      <div className="password-errors">
        {!validations.upper && (
          <p>• Must have at least one uppercase letter.</p>
        )}
        {!validations.lower && (
          <p>• Must have at least one lowercase letter.</p>
        )}
        {!validations.number && <p>• Must have at least one number.</p>}
        {!validations.special && (
          <p>• Must have at least one special character.</p>
        )}
        {!validations.length && <p>• Must be exactly 8 characters long.</p>}
        {!validations.match && <p>• Passwords must match.</p>}
      </div>
    </>
  );
}
