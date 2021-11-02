import '@pnotify/core/dist/BrightTheme.css';
import { alert, notice, info, success, error } from '@pnotify/core';

export default function fetchCountries(searchQuery) {
  refs.list.innerHTML = '';
  refs.list.classList.add('is-hidden');
  refs.results.innerHTML = '';
  refs.results.classList.add('is-hidden');
  if (!searchQuery) {
    return;
  }

  fetch(`https://restcountries.com/v2/name/${searchQuery}`)
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        console.log(data);
        showResults(data);
      } else {
        console.log('Not found');
      }
    });
}

const refs = {
  input: document.querySelector('.input'),
  results: document.querySelector('.results'),
  list: document.querySelector('.list'),
};

function showResults(data) {
  if (data.length > 9) {
    console.log('Too many matches found. Please enter a more specific query!');
    const myError = error({
      text: 'Too many matches found. Please enter a more specific query!',
      sticker: false,
      icon: false,
      closer: false,
      delay: 250,
      addClass: 'notice',
    });
    return;
  }

  if (data.length >= 2 && data.length <= 9) {
    listMarkUp(data);
    return;
  }

  if ((data.length = 1)) {
    countryMarkUp(data);
  }
}

function listMarkUp(data) {
  const createImgEl = ({ name }) => {
    return `<li class="item">${name}</li>`;
  };

  const imagesEl = data.map(createImgEl).join('');

  refs.list.innerHTML = '';
  refs.results.innerHTML = '';

  refs.list.insertAdjacentHTML('beforeend', imagesEl);
  refs.list.classList.remove('is-hidden');
}

function countryMarkUp(data) {
  const createImgEl = ({ name, capital, population, languages, flag }) => {
    return `<div>
    <h1>${name}</h1>
    <img src=${flag} width="500">
              <p>Capital: ${capital}</p>
              <p>Population: ${population}</p>
              <p>Languages: ${languages}</p>
            </div>`;
  };

  const imagesEl = data.map(createImgEl).join('');
  refs.list.innerHTML = '';
  refs.list.classList.add('is-hidden');

  refs.results.innerHTML = '';

  refs.results.insertAdjacentHTML('beforeend', imagesEl);
  refs.results.classList.remove('is-hidden');
  refs.input.value = '';
}
