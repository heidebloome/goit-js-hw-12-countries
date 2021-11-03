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
    listMarkUp(data);
  } else if ((data.length = 1)) {
    countryMarkUp(data);
  }
}

export function clearCurrentMarkUp() {
  refs.list.innerHTML = '';
  refs.results.innerHTML = '';
  refs.list.classList.add('is-hidden');
  refs.results.classList.add('is-hidden');
}

function listMarkUp(data) {
  const list = data.map(listTemplate).join('');

  clearCurrentMarkUp();
  refs.list.classList.remove('is-hidden');

  refs.list.insertAdjacentHTML('beforeend', list);
}

function countryMarkUp(data) {
  const country = data.map(countryTemplate).join('');

  clearCurrentMarkUp();
  refs.results.classList.remove('is-hidden');

  refs.results.insertAdjacentHTML('beforeend', country);
}
