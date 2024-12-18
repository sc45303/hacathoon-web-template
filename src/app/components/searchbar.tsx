import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="flex-1 max-w-3xl ml-4 lg:ml-0">
      {/* Mobile View */}
      <div className="lg:hidden">
        {!showSearch ? (
          <button
            className="p-2 bg-gray-100 rounded-full focus:outline-none "
            onClick={() => setShowSearch(true)}
          >
            <Search className="text-gray-400 h-6 w-6 " />
          </button>
        ) : (
          <div className="relative">
            <input
              type="search"
              placeholder="Search for products..."
              className="w-full px-4 py-2 pl-10 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-black"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            {/* <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
              onClick={() => setShowSearch(false)}
            >
              ✕
            </button> */}
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block relative">
        <input
          type="search"
          placeholder="Search for products..."
          className="w-full px-4 py-2 pl-10 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-black"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      </div>
    </div>
  );
};

export default SearchBar;
