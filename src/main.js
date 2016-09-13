import { handleSearchClick } from './handlers'

require('./main.css')

document.addEventListener('DOMContentLoaded', () => {
  // add search button click handler here
  const button = document.querySelector('#search');
  button.addEventListener('click', handleSearchClick);
})
