import React, { useState } from "react";

const OtpVerfication = () => {
  const OTP_Fields = 5;

  const [otp, setOtp] = useState(new Array(OTP_Fields).fill(""));

  const handleChange = (e, index) => {
    console.log(e.target.value);
    let value = e.target.value;
    if (isNaN(value)) return;
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);
  };

  return (
    <div>
      {otp.map((x, index) => {
        return (
          <input
            type="text"
            key={index}
            value={x}
            onChange={(e) => handleChange(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OtpVerfication;
