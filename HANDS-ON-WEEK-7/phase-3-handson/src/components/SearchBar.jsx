import { useRef, useEffect } from "react";
function SearchBar({ setQuery }) {
  let inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="flex justify-center mb-8">
      <input type="text" ref={inputRef} placeholder="Search country..."
        onChange={(e) => setQuery(e.target.value)}
        className="w-80 px-4 py-2 border rounded-lg shadow-sm"/>
    </div>
  );
}

export default SearchBar;