import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import API from "../../api";

export default function SearchBar({ onClose }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await API.get(`/search?q=${encodeURIComponent(query)}`);
      setResults(res.data.results || []);
    } catch (err) {
      console.error("Search error:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-gray-900 border-b border-white/20 shadow-lg p-4">
      <form
        onSubmit={handleSearch}
        className="flex items-center gap-2 max-w-3xl mx-auto"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-500 focus:outline-none text-black"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
        <button
          type="button"
          onClick={onClose}
          className="ml-2 text-white hover:text-red-400"
        >
          <FiX size={20} />
        </button>
      </form>

      {/* Results */}
      <div className="mt-4 max-w-3xl mx-auto text-white">
        {loading && <p className="text-sm">Searching...</p>}
        {!loading && results.length === 0 && query && (
          <p className="text-sm text-gray-400">No results found.</p>
        )}
        <ul className="space-y-2">
          {results.map((r, i) => (
            <li
              key={i}
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            >
              {r.title || r.name || "Untitled"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
