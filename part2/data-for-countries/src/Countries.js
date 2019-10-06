import React from 'react'

const Countries = ({countryData, setChosenCountry}) => {
  if (countryData.length > 10) {
    setChosenCountry('')
    return(
      <div>Too many matches. Specify another filter.</div>
    )
  }
  if(countryData.length === 0) {
    setChosenCountry('')
    return(
      <div>Not found. Specify another filter.</div>
    )
  }  

  if(countryData.length === 1) {
    setChosenCountry(countryData[0])
    return null
  }
  else {
    const data = countryData.map(country => <div key={country.alpha2Code}>{country.name} <button onClick={() => setChosenCountry(country)}>show</button></div>)

    return (
      <div>
        {data}
      </div>
    )
  }
}

export default Countries