import { badRequestError } from "./errorFunctions.js"

function fetchCountries(searchQuerry) {
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    }
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuerry}`, options)
        .then((response) => {
            if (response.status == 200) {
                return response.json();
            }
            else if (response.status == 404) {
                badRequestError();
            }
        })
}


export default fetchCountries;