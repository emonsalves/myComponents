import React, { useState } from "react"
import style from "./Search.css"

function Search() {
  const [searchBoxClassName, setSearchBoxClassName] = useState("searchBox")

  const clickSearch = () => {
    searchBoxClassName === "searchBox" && setSearchBoxClassName("searchBox active")
  }

  const clickClose = ()=>{
    searchBoxClassName === "searchBox active" && setSearchBoxClassName("searchBox")
  }

  return (
    <div className={searchBoxClassName}>
      <div className="search" onClick={clickSearch}>
        <ion-icon name="search-outline"></ion-icon>
      </div>
      <div className="searchInput">
        <input type="text" placeholder="Search Here" />
      </div>
      <div className="close" onClick={clickClose}>
        <ion-icon name="close-outline"></ion-icon>
      </div>
    </div>
  )
}

export default Search
