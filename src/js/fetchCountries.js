import { showResults, clearCurrentMarkUp } from './create-mark-up.js';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';

const BASE_URL = 'https://restcountries.com/v2';

export default function fetchCountries(searchQuery) {
  clearCurrentMarkUp();

  if (!searchQuery) {
    return;
  }

  fetch(`${BASE_URL}/name/${searchQuery}`)
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        showResults(data);
      } else {
        const myError = error({
          text: 'Please enter a valid country name!',
          sticker: false,
          icon: false,
          closer: false,
          delay: 250,
          addClass: 'notice',
        });
      }
    });
}
