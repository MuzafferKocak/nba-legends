import { data } from "../../helper/data";


import { useState } from "react";
import "../../App.css";
import PlayerCard from "../PlayerCard/PlayerCard";

const Search = () => {
  console.log(data);

  const [search, setSearch] = useState("");
  console.log(search);

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="searchPlayer">
      <input
        onChange={handleChange}
        type="search"
        placeholder="Search Player..."
      
        />
        <div className="container">
        {data
        .filter((item) => (item.name.toLowerCase().includes(search.toLowerCase().trim()))
          
        )
        .map((player, i) => {
          return (
            <div  className="" key={i}>
              <PlayerCard search={search} {...player} />
            </div>
          );
        })}
        </div>
      
        
    </div>
  );
};

export default Search;
