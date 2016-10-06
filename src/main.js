import 'bootstrap/dist/css/bootstrap.css';
import { handleSearchClick } from './handlers';
// require('./main.css');

export default function main() {
  const button = document.querySelector('#search');
  button.addEventListener('click', handleSearchClick);
}


document.addEventListener('DOMContentLoaded', main);
