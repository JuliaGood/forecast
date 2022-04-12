import './week.css';
import Day from '../day/Day';

function Week({ days }) {
  return (
    <div className="week">
      {
        days.map((day, index) => (
          <Day
            dayDate={day.dt} 
            dayIcon={day.weather[0].icon}
            dayCondition={day.weather[0].main}
            dayTemperature={day.temp.eve}
            key={index}
            isActive={true}
          />
        ))
      }
    </div>
  )
}

export default Week;
