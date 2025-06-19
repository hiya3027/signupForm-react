import "../index.css";

export default function SignupStep4({ data, prevStep, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(data).some((val) => !val)) {
      alert("Please fill all fields.");
    } else {
      alert("Signup Successful!");
      onSubmit();
    }
  };

  return (
    <form className="step-content fade-in" onSubmit={handleSubmit}>
      <p>You're ready to submit your details.</p>

      <div className="button-group">
        <button type="button" onClick={prevStep}>Back</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

