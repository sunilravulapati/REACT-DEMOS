function SearchBar({ setQuery }) {
  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        placeholder="Search country..."
        autoFocus
        onChange={(e) => setQuery(e.target.value)}
        className="w-80 px-4 py-2 border rounded-lg shadow-sm"
      />
    </div>
  );
}

export default SearchBar;