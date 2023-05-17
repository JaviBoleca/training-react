import "./Search.css";
import { useState } from "react";

const Search = (props) => {
  const [search, setSearch] = useState(["", "All"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(search)
    setSearch(["","All"])
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    let result =
      name === "search"
        ? [e.target.value, search[1]]
        : [search[0], e.target.value];
    console.log(result);
    setSearch(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="category" onChange={handleInputChange} value={search[1]}>
        <option value="All">All</option>
        <option value="Living Room">Living Room</option>
        <option value="Furniture">Furniture</option>
        <option value="Dining Room">Dining Room</option>
        <option value="Bedroom">Bedroom</option>
        <option value="Study Room">Study Room</option>
        <option value="Entryway">Entryway</option>
        <option value="Kitchen">Kitchen</option>
      </select>
      <input
        onChange={handleInputChange}
        type="search"
        name="search"
        id=""
        placeholder="Enter the product name"
        value={search[0]}
      />
      <button>Search</button>
    </form>
  );
};

export default Search;
