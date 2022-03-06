import './App.css';
import LocationAndGeneralWeather from './components/LocationAndGeneralWeather';
import UserInput from './components/UserInput';
import DaySelect from './components/DaySelect';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function App() {

  // need to add celcius/farienheit toggle and states

  const [userInputString, setUserInputString] = useState('');
  const [queryResponseDateTime, setQueryResponseDateTime] = useState();
  const [dailyTempMin, setDailyTempMin] = useState([]);
  const [dailyTempMax, setDailyTempMax] = useState([]);
  const [hourlyTemperatureArray, setHourlyTemperatureArray] = useState(0);
  const [locationLatitude, setLocationLatitude] = useState(0);
  const [locationLongitude, setLocationLongitude] = useState(0);
  const [locationSearchbarInput, setLocationSearchbarInput] = useState(0);
  const [locationOfWeather, setLocationOfWeather] = useState();
  const [weatherGeneral, setWeatherGeneral] = useState();
  const [temperature, setTemperature] = useState();
  const [precipitation, setPrecipitation] = useState();
  const [humidity, setHumidity] = useState();
  const [windspeed, setWindspeed] = useState();
  const [hourlyWindDirection, setHourlyWindDirection] = useState(0);
  const [hourlyTemp, setHourlyTemp] = useState(0);
  const [hourlyPrecipitation, setHourlyPrecipitation] = useState(0);
  const [hourlyHumidity, setHourlyHumidity] = useState(0);
  const [isInputLoading, setIsInputLoading] = useState(0);
  const [weatherDateTime, setWeatherDateTime] = useState(0);


  const handleChange = (e) => {
    setUserInputString(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const googleapikey = ""
    const googleQuery = `https://maps.googleapis.com/maps/api/geocode/json?address=${userInputString}&key=${googleapikey}`
    const googleRequest = axios.get(googleQuery)
    googleRequest.then((response) => {
      let lat = response.data.results[0].geometry.location.lat
      let lon = response.data.results[0].geometry.location.lng
      let owmapikey = ""
      let owmQuery = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${owmapikey}`

      //need to go through the array below and pull out a location based off keyword, then set to following state
      //const addressComponentsArray = response.data.results[0].address_components
      //setLocationOfWeather()
      //

      return axios.get(owmQuery)
    })
      .then((response) => {
        const arrayOfTempMin = response.data.daily.map(tempMin => tempMin.temp.min)
        const arrayOfTempMax = response.data.daily.map(tempMax => tempMax.temp.max)
        setQueryResponseDateTime(response.data.current.dt)
        setLocationLatitude(response.data.timezone)
        setTemperature(response.data.current.temp)
        setWeatherGeneral(response.data.current.weather[0].main)
        setHumidity(response.data.current.humidity)
        setWindspeed(response.data.current.wind_speed)
        setDailyTempMin(arrayOfTempMin)
        setDailyTempMax(arrayOfTempMax)

      });
  }







  return (
    <div className="App">
      <UserInput handleSubmit={handleSubmit} handleChange={handleChange} />
      {queryResponseDateTime &&
        <LocationAndGeneralWeather
          humidity={humidity}
          windspeed={windspeed}
          locationOfWeather={locationOfWeather}
          weatherDateTime={weatherDateTime}
          weatherGeneral={weatherGeneral} />
      }
      {queryResponseDateTime &&
        <DaySelect
          queryResponseDateTime={queryResponseDateTime}
          dailyTempMin={dailyTempMin}
          dailyTempMax={dailyTempMax} />
      }

    </div>
  );
}

export default App;
