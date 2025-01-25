import React from "react";
import Image from "next/image";


interface SearchBarProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search",
  onChange,
  value = "",
}) => {
  return (
    <div className="flex bg-white items-center border border-gray-300 rounded-2xl px-3 py-1 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
      <Image className="text-gray-400 mr-2" src="/Icon.svg" alt="" width={15} height={15} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="flex-1 border-none outline-none text-gray-700"
      />
    </div>
  );
};

export default SearchBar;
