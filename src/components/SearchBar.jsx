import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="shadow-md bg-white flex items-center rounded-4xl px-3 w-full">
      <img src="icons/search.svg" className="opacity-75 max-h-5 " />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for chips, soab bar, etc..."
        className="outline-none text-xs text-gray-700 p-3 w-full"
      />
    </div>
  );
}
