import './sass/main.scss';

import { debounce } from 'lodash';
import refs from './js/refs.js';
import fetchCountries from './js/fetchCountries';
import showResults from './js/create-mark-up.js';

refs.input.addEventListener('input', debounce(onInput, 500));

function onInput(event) {
  const searchQuery = event.target.value.trim();

  if (!searchQuery) return;

  refs.list.innerHTML = '';
  refs.country.innerHTML = '';

  fetchCountries(searchQuery).then(data => {
    showResults(data);
  });
}
