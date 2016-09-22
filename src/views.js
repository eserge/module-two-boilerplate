import {
  handleUserClick
} from './handlers';


function toggleSpinner() {
  // clean all content of passed node and then render element with `spinner` classname
  const spinner = document.querySelector('#spinner');
  spinner.classList.toggle('show');
}

function renderSearchResult(accounts) {
  // render result to the node with class name `search-results`
  // Note! it's already exist. See index.html for more info.
  // Each search result item should be rendered
  // inside node with `search-results_item` class name.
  const userList = accounts.map(renderUser).join('');
  const node = document.querySelector('#search-results');
  node.innerHTML = userList;
  for (let element of document.querySelectorAll('.js-user')) {
    element.addEventListener('click', handleUserClick);
  }
}

function renderUser({nickname, account_id}) {
  return `
    <div class="search-results_item js-user" data-id="${account_id}">${nickname}</div>
  `
}

function renderUserProfile({nickname, global_rating, statistics}) {
  const {wins, battles} = statistics.all;
  const winsPercents = (wins / battles * 100).toFixed(2);
  const profile = `
    <div>
    <h1>${nickname}</h1>
    <p>Rating: ${global_rating}</p>
    <p>Battles: ${battles}</p>
    <p>Wins Percent: ${winsPercents}</p>
    </div>
  `
  document.querySelector('#profile').innerHTML = profile;
}

function toggleError(errorMessage) {
  const errorElement = document.querySelector('#error-message');
  errorElement.innerHTML = errorMessage;
  errorElement.classList.add('show');
}

export {
  toggleSpinner,
  renderSearchResult,
  renderUser,
  renderUserProfile,
  toggleError
}
