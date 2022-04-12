import moment from 'moment';
import './day.css';

function Day({ isActive, dayDate, dayIcon, dayCondition, dayTemperature }) {
  const dayName = moment.unix(dayDate).format("dddd");
  const monthName = moment.unix(dayDate).format("MMMM D");
  const dayTemp = Math.round(dayTemperature);

  return (
    <>
      <div className="day">
        <div className={`day-box ${isActive ? "active" : ""}`} >
          <div className="day-name">{dayName}</div>
          <div className="day-details" >
            <div className="day-condition-icon">
              <img src={`http://openweathermap.org/img/wn/${dayIcon}@2x.png`} alt={dayIcon} />
            </div>
            <div className="day-condition">{dayCondition}</div>
            <div className="day-temperature">{dayTemp} <span>℃</span></div>
            <div className="day-date">{monthName}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Day;
