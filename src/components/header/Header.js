import './header.css';
import SearchBar from '../search-bar/SearchBar';

function Header({ onSearchChange, onCitySelect, matchedCities, inputCity }) {
  return (
    <div className="header">
      <h2 className="app-title"><span>Weather</span><span>Forecast</span></h2>
      <SearchBar 
        onSearchChange={onSearchChange}
        onCitySelect={onCitySelect}
        matchedCities={matchedCities}
        inputCity={inputCity}
       />
    </div>
  )
}

export default Header;
