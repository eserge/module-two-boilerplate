import {
  handleUserClick
} from './handlers';


function toggleSpinner() {
  // clean all content of passed node and then render element with `spinner` classname
  const spinner = document.querySelector('#spinner');
  spinner.classList.toggle('show');
}

function renderUser({ nickname, accountId }) {
  return `
    <div class="search-results_item js-user" data-id="${accountId}">${nickname}</div>
  `;
}

function renderSearchResult(accounts) {
  // render result to the node with class name `search-results`
  // Note! it's already exist. See index.html for more info.
  // Each search result item should be rendered
  // inside node with `search-results_item` class name.
  const userList = accounts.map(renderUser).join('');
  const node = document.querySelector('#search-results');
  node.innerHTML = userList;
  for (const element of document.querySelectorAll('.js-user')) {
    element.addEventListener('click', handleUserClick);
  }
}

function renderUserProfile({ nickname, globalRating, statistics }) {
  const { wins, battles } = statistics.all;
  const winsPercents = ((wins / battles) * 100).toFixed(2);
  const profile = `
    <div>
    <h1>${nickname}</h1>
    <p>Rating: ${globalRating}</p>
    <p>Battles: ${battles}</p>
    <p>Wins Percent: ${winsPercents}</p>
    </div>
  `;
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
};
