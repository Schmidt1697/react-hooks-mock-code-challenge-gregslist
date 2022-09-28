import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
//state
const [listingData, setListingData] = useState([]);
const [searchSubmit, setSearchSubmit] = useState('');

//GET data - fetch from database and set state
useEffect(() => {
  fetch("http://localhost:6001/listings")
  .then(res => res.json())
  .then(data => {
    setListingData(data)
  })
},[]);

  //search listings - send down as props
  //updating search state
  const filteredListings = listingData.filter(listing =>{
    return (listing.description.toLowerCase().includes(searchSubmit.toLowerCase()))
  })

  //delete listing
  const onDeleteListing = (deletedListingId) => {
    const remainingListings = listingData.filter(listing => {
      if(listing.id !== deletedListingId){
        return listing
      }else return false
    })
    setListingData(remainingListings)
  }

  return (
    <div className="app">
      <Header searchSubmit={searchSubmit} setSearchSubmit={setSearchSubmit} listingData={listingData} setListingData={setListingData}/>
      <ListingsContainer listingData={filteredListings} onDeleteListing={onDeleteListing}/>
    </div>
  );
}

export default App;

//1. [x] see all listings on app load
//2. [x] favorite and unfavorite a listing by clicking star icon (no persistence needed)
//3. [x] remove a listing from page by clicking trash !!!persistance needed (DELETE)
//4. [x] search listings by name in search bar
