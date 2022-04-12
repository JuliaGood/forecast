import React, { Component } from "react";
import "./app.css";
import Header from "./components/header/Header";
import City from "./components/city/City";
import Week from "./components/week/Week";

const API_BASE_URL = 'http://api.openweathermap.org';
const API_KEY = 'ad3470aa9e33050bac76b3d9fd51b684';
const MATCHED_CITIES_LIMIT = 20;

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputCity: "",
      forecast: [],
      city: null,
      matchedCities: []
    }
  }

  onSearchChange = (e) => {
    const value = e.target.value;

    if (value.length > 3) {
      fetch(`${API_BASE_URL}/geo/1.0/direct?q=${value}&limit=${MATCHED_CITIES_LIMIT}&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          //console.log('cities', data);
          if (data && data.length > 0 ) {
            this.setState({ matchedCities: data });
          } else {
            this.setState({ matchedCities: [] });
          }
        });
    }
    this.setState({ inputCity: value });
  }

  onCitySelect = (city) => {
    this.setState({ city: city, inputCity: '', matchedCities: [] }, () => {
      this.getForecast();
    });
  }

  getForecast = () => {
    fetch(`${API_BASE_URL}/data/2.5/onecall?lat=${this.state.city.lat}&lon=${this.state.city.lon}&units=metric&exclude=hourly,minutely,alerts&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        this.setState({ forecast: data.daily });
      })
  }

  render() {
    const days = this.state.forecast.slice(0, 5);

    return (
      <div id="container">
        <Header 
          onSearchChange={this.onSearchChange}
          onCitySelect={this.onCitySelect}
          matchedCities={this.state.matchedCities}
          inputCity={this.state.inputCity}
        />
        { this.state.city && <City city={this.state.city} /> }
        <Week days={days} /> 
      </div>
    );
  }
}

export default App;
