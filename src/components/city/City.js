import './city.css';
import sprite from '../../assets/sprite.svg';

function City({ city }) {
  return (
    <div className="city">
      <div className="city-icon">
        <svg>
          <use xlinkHref={`${sprite}#location`} alt=""></use>
        </svg>
        </div>
      <p className="city-name">{city.name}, {city.country}</p>
    </div>
  )
}

export default City;
