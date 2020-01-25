import React, { useState, useEffect } from "react";

function SearchForm({characters, setFilterCharacters}) {

  const [search, setSearch] = useState("");
  
  useEffect(() => {
    const filtered = characters.results.filter(character => character.name.toLowerCase().includes(search.toLowerCase()));
    setFilterCharacters(filtered);
  }, [search]);

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };
 
  return (
    <section className="search-form">
     <h1>Filter by Name</h1>
      <input
        type="text"
        placeholder="Start typing here to see the magic happen!"
        onChange={handleChange}
        value={search}
      />
    </section>
  );
}

export default SearchForm;