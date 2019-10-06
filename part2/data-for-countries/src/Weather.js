import React from 'react'

const Weather = ({weather}) => {
  if (weather) {
    return (
      <div>
      <h3>Weather in {weather.city.name}</h3>
        temperature: {(weather.list[0].main.temp-273.15).toFixed(1)} Celsius<br/>
        wind: {weather.list[0].wind.speed} Km/h
      </div>    
    )
  }
  return null
}

export default Weather