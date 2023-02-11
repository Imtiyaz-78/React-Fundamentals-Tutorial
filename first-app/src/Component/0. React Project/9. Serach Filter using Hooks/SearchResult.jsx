import React from "react";

const SearchResult = (props) => {
  const img = `https://source.unsplash.com/600x400/?mango/?${props.name}`;
  
  return (
    <>
      <div>
        <img src ={img} alt=" photo "  style={{marginTop: "24px", borderRadius: "20px"}}/>
      </div>
    </>
  );
};

export default SearchResult;
