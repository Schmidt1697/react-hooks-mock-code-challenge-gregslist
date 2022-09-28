import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingData, onDeleteListing}) {

  const listings = listingData.map(listing => {
    return(
      <ListingCard key={listing.id} listing={listing} onDeleteListing={onDeleteListing}/>
    )
  })
  return (
    <main>
      <ul className="cards">
        {listings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
