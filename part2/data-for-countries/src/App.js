import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Countries from './Countries'
import Filter from './Filter'
import CountryDetails from './CountryDetails';

const App = () => {
  const [countryData, setCountyData] = useState([])
  const [filterText, setFilterText] = useState('')
  const [chosenCountry, setChosenCountry] = useState('')

  const filterList = (filterText === '') ? countryData : countryData.filter(country => country.name.toLowerCase().includes(filterText.toLowerCase()))

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => 
        setCountyData(response.data))
  }, [])

  return(
    <>
      <Filter filterText={filterText} setFilterText={setFilterText} />
      <Countries countryData={filterList} setChosenCountry={setChosenCountry} />
      <CountryDetails countryData={chosenCountry} />
    </>
  )
}

export default App;
