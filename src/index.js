import './sass/main.scss';
import refs from './js/refs.js';
import fetchCountries from './js/fetchCountries';
var debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(onInput, 1000));

function onInput(event) {
  const searchQuery = event.target.value;
  fetchCountries(searchQuery);
}
