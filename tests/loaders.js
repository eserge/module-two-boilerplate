/* eslint-env mocha */
/* eslint-disable */

import { assert } from 'chai';
import {
  loadUsers,
  loadProfile,
} from 'loaders';
import sinon from 'sinon';


describe.only('loadUsers', function() {
  const fakeData = {foo: 'bar'},
        fakeUser = 'fakeUserName';

  beforeEach(function() {
    sinon.stub(window, 'fetch');
  });

  afterEach(function() {
    window.fetch.restore();
  });

  it('should fetch account list', function() {
    window.fetch.returns(Promise.resolve({
      json() {
        return {
          status: 'ok',
          data: fakeData
        };
      }
    }));
    loadUsers(fakeUser).then(function(data) {
      assert.equal(
        window.fetch.firstCall.args[0],
        `http://188.166.73.133/wg-api/wot/account/list/?search=${fakeUser}`
      );
    });
  });
});

describe.only('loadProfile', function() {
  const accountId = 42,
        errorMessage = 'this message',
        fakeData = {stuff: 42};

  beforeEach(function() {
    sinon.stub(window, 'fetch');
  });

  afterEach(function() {
    window.fetch.restore();
  });

  it('should fetch account information', function() {
    window.fetch.returns(Promise.resolve({
      json() {
        return {
          status: 'ok',
          data: fakeData
        };
      }
    }));
    loadProfile(accountId).then(function(data) {
      assert.equal(
        window.fetch.firstCall.args[0],
        `http://188.166.73.133/wg-api/wot/account/info/?search=${accountId}`
      );
    });
  });

  it('should handle errors', function() {
    window.fetch.returns(Promise.resolve({
      json() {
        return {
          status: 'error',
          error: {message: errorMessage}
        };
      }
    }));

    loadProfile(accountId).catch(function(error) {
      assert.equal(error, errorMessage);
    });
  });
});
