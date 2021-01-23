import './styles.css';

import { overSizeError } from "./js/errorFunctions.js"
import fetchCountries from './js/fetchCountries.js';
import debounce from 'lodash.debounce';

import listTemplate from './templates/listTemplate.hbs';
import countryTemplate from './templates/singleCountryTemplate.hbs';

import refs from './js/refs.js';


refs.input.addEventListener('input', debounce((event) => {
    const searchQuerry = event.target.value;
    fetchCountries(searchQuerry)
        .then(data => createMarkup(data))
}, 500)
);

function createMarkup(data) {
    clearCountryList();
    if (data.length === 1) {
        insertSingleCountryMarkup(data);
        return;
    }
    if (data.length < 10) {
        insertListCountryMarkup(data);
    }
    else {
        clearCountryList();
        overSizeError();
    }
}

function clearCountryList() {
    refs.countryList.innerHTML = '';
}

function insertListCountryMarkup(data) {
    refs.countryList.innerHTML = listTemplate(data);
}

function insertSingleCountryMarkup(data) {
    refs.countryList.innerHTML = countryTemplate(data);
}

import Darkmode from 'darkmode-js';

const DarkModeOptions = {
    bottom: '64px',
    right: '64px',
    left: 'unset',
    time: '0.5s',
    mixColor: '#fff',
    backgroundColor: '#fff',
    buttonColorDark: '#100f2c',
    buttonColorLight: '#fff',
    saveInCookies: false,
    label: '',
    autoMatchOsTheme: true
}

const darkmode = new Darkmode(DarkModeOptions);
darkmode.showWidget();