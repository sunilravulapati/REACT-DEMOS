import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // fetch countries
  useEffect(() => {
    async function fetchCountries() {
      setLoading(true);
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
        );
        const data = await res.json();
        setCountries(data);
        setFilteredCountries(data);
      }
      catch (err) {
        setError("Failed to fetch countries");
      }
      finally {
        setLoading(false);
      }
    }
    fetchCountries();
  }, []);

  // search debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = countries.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCountries(filtered);
    }, 400);
    return () => clearTimeout(timer);
  }, [query, countries]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Country Explorer</h1>
      <SearchBar setQuery={setQuery} />
      {
        loading && (<p className="text-center text-lg text-gray-600 mt-6">Loading countries...</p>)
      }
      {
        error && (<p className="text-center text-red-500 mt-6">{error}</p>)
      }
      {
        !loading && !error && (<CountryList countries={filteredCountries} />)
      }
    </div>
  );
}

export default App;