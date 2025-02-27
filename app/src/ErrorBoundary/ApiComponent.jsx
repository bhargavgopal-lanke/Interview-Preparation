import React, { useEffect, useState } from "react";

const ApiComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchErr, setFetchErr] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.example.com/data");
    const json = await data.json();
    setData(json);
  };

  return <div></div>;
};

export default ApiComponent;
