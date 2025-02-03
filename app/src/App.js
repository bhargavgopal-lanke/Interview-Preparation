import { useState } from "react";
import Interests from "./Swiggy_interview_Quetion/Interests";
import Profile from "./Swiggy_interview_Quetion/profile";
import Settings from "./Swiggy_interview_Quetion/settings";
import "./App.css";

function App() {
  const [activeTabs, showActiveTabs] = useState(0);

  const tabs = [
    {
      name: "profile",
      component: Profile,
    },
    {
      name: "settings",
      component: Settings,
    },
    {
      name: "interests",
      component: Interests,
    },
  ];

  const ActiveComponent = tabs[activeTabs].component;

  return (
    <div className="App">
      <div className="d-flex">
        {tabs.map((t, index) => {
          return (
            <div key={index} className="tabs-sec">
              <div
                onClick={() => showActiveTabs(index)}
                className={index !== activeTabs ? null : "active"}
                style={{padding: "10px"}}
              >
                {t.name}
              </div>
            </div>
          );
        })}
      </div>
      <div className="tabs-sec-body">
        <ActiveComponent />
      </div>
    </div>
  );
}

export default App;
