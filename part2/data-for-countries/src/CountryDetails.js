import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Weather from './Weather'

const CountryDetails = ({countryData}) => {
  const [weather,setWeather] = useState('')

  useEffect(() => {
    axios
    .get('https://api.openweathermap.org/data/2.5/forecast?q='+countryData.capital+'&appid=9fc2fc404b6ccf49fd4d416d43e1b86b')
    .then(response => {
      setWeather(response.data)
      }
    )
  }, [countryData])

  if (countryData) {
    let langinfo = ''
    if(countryData.languages){
      langinfo =  countryData.languages.map(lang => <li key={lang.name}>{lang.name}</li>)
    }

    return(
      <div>
        <h1>{countryData.name}</h1>
        capital {countryData.capital}<br />
        population {countryData.population}<br /><br />
        <h3>languages</h3>
        <ul>
          {langinfo}
        </ul>
        <br />
        <img src={countryData.flag} alt="Flag" width="100" />
        <Weather weather={weather} />
      </div>
    )
  }

  return null
}

export default CountryDetails