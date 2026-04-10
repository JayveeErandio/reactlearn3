import { useState } from "react";
import "tailwindcss";

export default function SearchBar({ onSearch, className }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div
      className={className + " shadow-md flex items-center rounded-4xl px-3 "}
      style={{ background: "var(--background2)" }}
    >
      <img
        src="icons/search.svg"
        className="h-6"
        style={{ filter: "var(--invert)" }}
      />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for chips, soap bar, etc..."
        className="outline-none text-sm px-2 py-3 w-full"
        style={{ color: "var(--color1)" }}
      />
      <img
        onClick={() => {
          setQuery("");
          onSearch("");
        }}
        className={(query == "" ? "hidden" : "") + " cursor-pointer w-5"}
        src="icons/cancel.svg"
        style={{ filter: "var(--invert)" }}
      />
    </div>
  );
}
