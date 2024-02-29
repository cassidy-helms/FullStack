import { useState, useEffect } from 'react'
import './index.css'
import Search from './components/Search'
import CountryData from './components/CountryData'
import Weather from './components/Weather'
import countriesService from './services/countries'
import CountriesList from './components/CountriesList'


function App() {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [countryData, setCountryData] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    countriesService
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
  }, [])

  useEffect(() => {
    if(search) {
      const exactMatch = countries.find(country => country.common.toLowerCase() === search.toLowerCase() || country.official.toLowerCase() === search.toLowerCase())
      let country = null

      if(exactMatch) {
        country = exactMatch
      } else {
        const filteredCountries = countries.filter(country => country.common.toLowerCase().includes(search.toLowerCase()) || country.official.toLowerCase().includes(search.toLowerCase()))
        setFilteredCountries(filteredCountries)

        if(filteredCountries.length === 1) {
          country = filteredCountries[0]
        }
      }

      if(country) {
        countriesService
          .getByName(country.common)
          .then(data => {
            setCountryData(data)
          })
      }
    }
  }, [search])

  return (
    <>
      <Search search={search} setSearch={setSearch} setCountryData={setCountryData} />
      <CountriesList filteredCountries={filteredCountries} search={search} setSearch={setSearch}/>
      {countryData && <CountryData country={countryData} />}
      {countryData && <Weather city={countryData.capital} />}
    </>
  )
}

export default App
