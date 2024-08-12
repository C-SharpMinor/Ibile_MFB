import React from "react";
import "./loan.css";

const Loan: React.FC = () => {
  return (
    <div className="calculate">
      <div className="slider-container">
        <h2 style={{ marginBottom: "0", textAlign: "center" }}>
          Move the slider{" "}
        </h2>
        <div className="slider_div">
          <h3>sth</h3>
          <input
            type="range"
            min="50000"
            max="5000000"
            className="slider"
            defaultValue="0"
          />
        </div>
        <div className="slider_div">
          <h3>sth</h3>
          <input
            type="range"
            min="1"
            max="12"
            className="slider"
            defaultValue="0"
          />
        </div>
        <button>Apply Now</button>
      </div>
      <div className="message">
        <h1>Loan Calculator</h1>
        <div className="underline3"></div>
        <span className="text" style={{ fontWeight: "700", color: "#ff5e00" }}>
          Quickly calculate your total loan amount (principal + interest).
        </span>
      </div>
    </div>
  );
};

export default Loan;
