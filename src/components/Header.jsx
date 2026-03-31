import SearchBar from "./SearchBar";
import { useState } from "react";

export default function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex w-full items-center gap-2 justify-between">
      <SearchBar className="flex-1" onSearch={setSearchTerm} />
      <img src="icons/darkmode.svg" className="h-8" />
    </div>
  );
}
