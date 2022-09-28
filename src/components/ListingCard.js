import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  //state
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handleFavoriteBtn = () => {
    setIsFavorite(isFavorite => !isFavorite);
  }

  const handleDeleteListing = (deletedListingId)=>{
    
   //delete from db
   fetch(`http://localhost:6001/listings/${deletedListingId}`, {
      method: 'DELETE'
   })
   .then(onDeleteListing(deletedListingId))
    
  

    
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description}/>
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={handleFavoriteBtn}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoriteBtn}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={()=> handleDeleteListing(listing.id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
