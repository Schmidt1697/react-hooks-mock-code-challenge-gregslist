import React from "react";
import Search from "./Search";

function Header({ setSearchSubmit, listingData, setListingData }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchSubmit={setSearchSubmit} listingData={listingData} setListingData={setListingData} />
    </header>
  );
}

export default Header;
