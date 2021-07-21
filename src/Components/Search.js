import React from "react";
import querryString from "query-string";

function Search(props) {
  var querry = querryString.parse(props.location.search);
  return (
    <div>
      <h1>Search Cake for: {querry.q}</h1>
    </div>
  );
}
export default Search;
