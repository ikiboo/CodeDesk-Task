import React, { useState } from "react";
import "./ItemSearch.css";

function ItemSearch({ items }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="item-search">
      <h1 className="item-search-title">Shopping List</h1>
      <input
        type="text"
        placeholder="Search items..."
        className="item-search-input"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul className="item-search-list">
        {filteredItems.map((item) => (
          <li key={item.id} className="item-search-item">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemSearch;
