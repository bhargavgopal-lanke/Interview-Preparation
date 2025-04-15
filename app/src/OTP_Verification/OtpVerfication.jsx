import React, { useState } from "react";

const OtpVerfication = () => {
  const NO_OF_INPUTS = 5;
  const [otp, setOtp] = useState(new Array(NO_OF_INPUTS).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value;
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);
  };

  return (
    <div>
      {otp.map((_, index) => {
        return (
          <>
            <input
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
