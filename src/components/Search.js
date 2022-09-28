import React, {useState} from "react";

function Search({setSearchSubmit}) {
const [search, setSearch] = useState('')

  const handleSearchInput = (e) => {
    e.preventDefault();
    setSearch(e.target.value)
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setSearchSubmit(search);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearchInput}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
