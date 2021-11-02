import './sass/main.scss';
import fetchCountries from './js/fetchCountries';
var debounce = require('lodash.debounce');

const refs = {
  input: document.querySelector('.input'),
  results: document.querySelector('.results'),
  list: document.querySelector('.list'),
};

refs.input.addEventListener('input', debounce(onInput, 500));

function onInput(event) {
  const searchQuery = event.target.value;
  fetchCountries(searchQuery);
}
