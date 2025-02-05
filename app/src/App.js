import { useState } from "react";
import Interests from "./Swiggy_interview_Quetion/Interests";
import Profile from "./Swiggy_interview_Quetion/profile";
import Settings from "./Swiggy_interview_Quetion/settings";
import "./App.css";

function App() {
  const [activeTabs, showActiveTabs] = useState(0);
  const [errors, setErrors] = useState({});

  const [data, setData] = useState({
    name: "Bhargav",
    age: "29",
    email: "bhargavgopallanke@gmail.com",
    interests: ["Coding", "Sports"],
    theme: "dark",
  });

  const tabs = [
    {
      name: "profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        } else if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        } else if (!data.email || data.email.length < 2) {
          err.email = "Email is not valid";
        }
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "interests are not valid";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "settings",
      component: Settings,
    },
  ];

  const ActiveComponent = tabs[activeTabs].component;

  const handleNextClick = () => {
    if (tabs[activeTabs].validate()) {
      showActiveTabs((prevState) => prevState + 1);
    }
  };

  const handlePrevClick = () => {
    showActiveTabs((prevState) => prevState - 1);
  };

  return (
    <div className="App">
      <div className="d-flex">
        {tabs.map((t, index) => {
          return (
            <div key={index} className="tabs-sec">
              <div
                onClick={() => showActiveTabs(index)}
                className={index !== activeTabs ? null : "active"}
                style={{ padding: "10px" }}
              >
                {t.name}
              </div>
            </div>
          );
        })}
      </div>
      <div className="tabs-sec-body">
        <ActiveComponent
          data={data}
          setData={setData}
          errors={errors}
        />
      </div>
      <div>
        {/* 0 > 0 condition is false no prev button */}
        {/* 1 > 0 and 2 > 0 we get prev button  */}
        {activeTabs > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {/* activetabs is initially 0 and tabs.length - 1 is always 2 because tabs length is 3 */}
        {/* we get next button for (0 - activeTabs < 2 - tabs.length) and (1 < 2) it means for the first two tabs */}
        {/* if condition is 2 < 2 it means false for last tab I wont get next button  */}
        {activeTabs < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {/* below button we will get when activeTabs value is 2 and tabs length is 3 */}
        {/* if conditions is 2 === 2 then only we render submit button */}
        {activeTabs === tabs.length - 1 && <button>Submit</button>}
      </div>
    </div>
  );
}

export default App;
