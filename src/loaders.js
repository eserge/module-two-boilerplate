/*
full API description you can find here:
https://ru.wargaming.net/developers/api_reference
you don't have to pass application_id query param.
It will be passed automatically via proxy server
*/

const API_PROXY_URL = 'http://188.166.73.133/wg-api';
const GAME = 'wot';


function makeRequest(url) {
  return window.fetch(url)
  .then(response => response.json())
  .then(responseJson => new Promise((resolve, reject) => {
    if (responseJson.status === 'ok') {
      resolve(responseJson.data);
    } else {
      reject(responseJson.error.message);
    }
  }));
}

function loadUsers(username) {
  const url = `${API_PROXY_URL}/${GAME}/account/list/?search=${username}`;
  return makeRequest(url);
}

function loadProfile(accountId) {
  const url = `${API_PROXY_URL}/${GAME}/account/info/?account_id=${accountId}`;
  return makeRequest(url)
  .then(data => data[accountId]);
}

export {
  loadUsers,
  loadProfile
};
