import '@pnotify/core/dist/BrightTheme.css';
import { info, error } from '@pnotify/core';
import refs from './refs.js';
import listTemplate from '../templates/list-template.hbs';
import countryTemplate from '../templates/country-template.hbs';

export default function showResults(data) {
  if (data.length > 10) {
    const myInfo = info({
      text: 'Too many matches found. Please enter a more specific query!',
      sticker: false,
      icon: false,
      closer: false,
      delay: 250,
      addClass: 'notice',
    });
    return;
  }

  if (data.length >= 2 && data.length <= 10) {
    refs.list.innerHTML = listTemplate(data);
    return;
  }

  if (data.length === 1) {
    refs.country.innerHTML = countryTemplate(...data);
    return;
  }

  const myError = error({
    text: 'Please enter a valid country name!',
    sticker: false,
    icon: false,
    closer: false,
    delay: 250,
    addClass: 'notice',
  });
}
