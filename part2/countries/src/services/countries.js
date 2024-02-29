import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = () => {
    return axios.get(`${baseUrl}/all`).then(response => response.data.map(country => country.name))
}

const getByName = (name) => {
    return axios.get(`${baseUrl}/name/${name}`).then(country => 
        {
            return {
                name: country.data.name,
                capital: country.data.capital,
                area: country.data.area,
                languages: country.data.languages,
                flag: country.data.flags.png
            }   
        })
}

export default { getAll, getByName }