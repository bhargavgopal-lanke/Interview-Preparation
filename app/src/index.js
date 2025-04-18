import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import './App.css';
// import Pagination from "./Pagination/Pagination";
import Search from "./AutoComplete_Search/search";
import Todo from "./Todo_App/Todo";
import OtpVerfication from "./OTP_Verification/OtpVerfication";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Pagination /> */}
    {/* <Search /> */}
    {/* <Todo /> */}
    <OtpVerfication />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
