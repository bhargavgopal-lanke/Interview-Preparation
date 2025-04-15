import React, { useRef, useState } from "react";

const OtpVerfication = () => {
  const NO_OF_INPUTS = 5;
  const [otp, setOtp] = useState(new Array(NO_OF_INPUTS).fill(""));

  const inputCurrentRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    // allow only number no text
    if (isNaN(value)) return;
    let newArr = [...otp];
    newArr[index] = value.slice(-1);
    setOtp(newArr);
  };

  return (
    <div>
      {otp.map((_, index) => {
        return (
          <>
            <input
            // assigning the ref to all input fields
              ref={(input) => (inputCurrentRef.current[index] = input)}
              key={index}
              type="text"
              value={otp[index]}
              onChange={(e) => handleChange(e, index)}
            />
          </>
        );
      })}
    </div>
  );
};

export default OtpVerfication;
