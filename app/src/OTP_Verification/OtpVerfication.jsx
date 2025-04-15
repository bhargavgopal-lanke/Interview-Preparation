import React, { useEffect, useRef, useState } from "react";

const OtpVerfication = () => {
  const OTP_Fields = 5;

  const [otp, setOtp] = useState(new Array(OTP_Fields).fill(""));

  const inputRef = useRef([]);

  console.log("ref", inputRef);

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  const handleChange = (e, index) => {
    let value = e.target.value;
    if (isNaN(value)) return;
    let newArr = [...otp];
    newArr[index] = value.slice(-1);
    setOtp(newArr);
    if (value.length === 1) {
      inputRef.current[index + 1]?.focus();
    }
  };

  const handleChangeOnKeyDown = (e, index) => {
    if(e?.target?.value === "" && e?.key === "Backspace") {
        inputRef.current[index - 1]?.focus();
    }
  }

  return (
    <div>
      {otp.map((x, index) => {
        return (
          <input
            ref={(el) => (inputRef.current[index] = el)}
            type="text"
            key={index}
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleChangeOnKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OtpVerfication;
