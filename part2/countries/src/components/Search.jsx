const Search = ({search, setSearch, setCountryData}) => {

    const handleSearch = (event) => {
        setSearch(event.target.value)
        setCountryData(null)
    }

    return (
        <div>
            find countries <input value={search} onChange={handleSearch}/>
        </div>
    )
}

export default Search;