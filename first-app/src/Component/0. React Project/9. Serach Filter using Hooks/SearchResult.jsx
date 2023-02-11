import React from "react";

const SearchResult = (props) => {
  const img = `https://source.unsplash.com/600x500/?mango/?${props.name}`;
  
  return (
    <>
      <div>
        <img src ={img} alt=" photo "  style={{marginTop: "10px", borderRadius: "20px"}}/>
      </div>
    </>
  );
};

export default SearchResult;
