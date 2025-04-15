import React, { useEffect, useRef, useState } from "react";

const OtpVerfication = () => {
  const NO_OF_INPUTS = 5;
  const [otp, setOtp] = useState(new Array(NO_OF_INPUTS).fill(""));

  const inputCurrentRef = useRef([]);

  useEffect(() => {
    inputCurrentRef.current[0]?.focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    // allow only number no text
    if (isNaN(value)) return;
    let newArr = [...otp];
    newArr[index] = value.slice(-1);
    setOtp(newArr);
    if (value.length === 1) {
      inputCurrentRef.current[index + 1]?.focus();
    }
  };

  const handleOnKeyDown = (e, index) => {
    if (e?.target?.value === "" && e?.key === "Backspace") {
      inputCurrentRef.current[index - 1]?.focus();
    }
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
              onKeyDown={(e) => handleOnKeyDown(e, index)}
            />
          </>
        );
      })}
    </div>
  );
};

export default OtpVerfication;
