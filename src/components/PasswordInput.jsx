import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function PasswordInput({
  label,
  value,
  onChange,
  placeholder,
  required = true,
  minLength = 8,
  maxLength = 8,
}) {
    const [showPassword, setShowPassword] = React.useState(false);
  return (
    <>
      <label>
        {label}
        <div style={{ position: "relative" }}>
          <input
            className="inputField"
            type={showPassword ? "text" : "password"}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="show-password"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </label>
    </>
  );
}
