const CountriesList = ({filteredCountries, search, setSearch}) => {

    return (
        <div>
            {filteredCountries.length > 10 && search.length > 0 &&
                <p>Too many matches, specify another filter</p>
            }
            {filteredCountries.length <= 10 && filteredCountries.length > 1 &&
                filteredCountries.map(country => {
                    return (
                        <div key={country.common}>
                            {country.common}
                            <button onClick={() => setSearch(country.common)}>show</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CountriesList;