import {
  loadUsers,
  loadProfile
} from './loaders';

import {
  renderSearchResult,
  toggleSpinner,
  renderUserProfile
} from './views';


function handleSearchClick(e) {
  // const query = document.q
  toggleSpinner();
  const usernameInput = document.querySelector('#username');
  const username = usernameInput.value;
  loadUsers(username)
  .then((data) => {
    toggleSpinner();
    return data;
  })
  .then(renderSearchResult)
  .catch((message) => {
    toggleSpinner();
    alert(message);
  });
}

function handleUserClick(e) {
  const userNode = e.target;
  const accountId = userNode.dataset.id;
  toggleSpinner();
  loadProfile(accountId)
  .then(data => renderUserProfile(data))
  .then(toggleSpinner);
}

export {
  handleSearchClick,
  handleUserClick
}
