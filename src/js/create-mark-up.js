import '@pnotify/core/dist/BrightTheme.css';
import { info } from '@pnotify/core';
import refs from './refs.js';
import listTemplate from '../list-template.hbs';
import countryTemplate from '../country-template.hbs';

export function showResults(data) {
  if (data.length > 9) {
    const myInfo = info({
      text: 'Too many matches found. Please enter a more specific query!',
      sticker: false,
      icon: false,
      closer: false,
      delay: 250,
      addClass: 'notice',
    });
  } else if (data.length >= 2 && data.length <= 9) {
    refs.list.innerHTML = listTemplate(data);
  } else if ((data.length = 1)) {
    refs.country.innerHTML = countryTemplate(data[0]);
  }
}
