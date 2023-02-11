import React, { useState } from "react";
import search from "./search.css";
import SearchResult from "./SearchResult";

const Search = () => {
  const [img, setIgm] = useState("");

  const InpuHandeler = (event) => {
    const data = event.target.value;
    setIgm(data);
    console.log(data);
  };

  return (
    <>
      <div className="Seachbar">
        <input
          className="serchnig"
          type="text"
          placeholder="Search Anything"
          value={img}
          onChange={InpuHandeler}
        />
      </div>

      {img === "" ? null : <SearchResult name={img} />}
      
    </>
  );
};

export default Search;
