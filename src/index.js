import './sass/main.scss';
import refs from './js/refs.js';
import fetchCountries from './js/fetchCountries';
import { debounce } from 'lodash';

refs.input.addEventListener('input', debounce(onInput, 500));

function onInput(event) {
  const searchQuery = event.target.value;
  refs.list.innerHTML = '';
  refs.country.innerHTML = '';
  fetchCountries(searchQuery);
}
