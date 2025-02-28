import React, { useEffect, useState } from "react";
import SerachList from "./SerachList";

const Search = () => {
  const [recipe, setRecipe] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://dummyjson.com/recipes/search?q=" + searchInput
    );
    const json = await data.json();
    console.log("json", json?.recipes);
    setRecipe(json?.recipes);
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 300);

    return () => {
      clearInterval(timer);
    };
  }, [searchInput]);

  return (
    <div>
      <div className="form">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e?.target?.value)}
        />
      </div>
      <label>
        {!recipe ? (
          <h1>Loading...</h1>
        ) : (
          recipe?.map((x) => {
            return <SerachList key={x.id} data={x} />;
          })
        )}
      </label>
    </div>
  );
};

export default Search;
