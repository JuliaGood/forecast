import "./searchBar.css";

function SearchBar({ onSearchChange, onCitySelect, matchedCities, inputCity }) {
  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search location..."
        value={inputCity}
        onChange={onSearchChange}
      />
      {matchedCities.length > 0 && (
        <div className="search-selection">
          {matchedCities.map((city) => (
            <div
              key={`${city.lat}-${city.lon}`}
              className="search-selection-item"
              onClick={() => onCitySelect(city)}
            >
              {city.name}, {city.country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
