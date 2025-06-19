import "../index.css";

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
    }
};

export default function SignupStep2({ data, onChange, nextStep, prevStep }) {
  return (
    <div className="step-content fade-in">
      <label>Date of Birth:
        <input
          type="date"
          className="inputField"
          value={data.dob}
          onChange={(e) => onChange("dob", e.target.value)}
          required
        />
      </label>

      <label>Country:
        <select
          className="inputField"
          value={data.country}
          onChange={(e) => {
            onChange("country", e.target.value);
            onChange("state", "");
            onChange("city", "");
          }}
        >
          <option value="">Select</option>
          {Object.keys(locationData).map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>

      <label>State:
        <select
          className="inputField"
          value={data.state}
          onChange={(e) => {
            onChange("state", e.target.value);
            onChange("city", "");
          }}
          disabled={!data.country}
        >
          <option value="">Select</option>
          {data.country &&
            Object.keys(locationData[data.country]).map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
        </select>
      </label>

      <label>City:
        <select
          className="inputField"
          value={data.city}
          onChange={(e) => onChange("city", e.target.value)}
          disabled={!data.state}
        >
          <option value="">Select</option>
          {data.state &&
            locationData[data.country][data.state].map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
        </select>
      </label>

      <div className="button-group">
        <button type="button" onClick={prevStep}>Back</button>
        <button type="button" onClick={nextStep}>Next</button>
      </div>
    </div>
  );
}
