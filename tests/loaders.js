/* eslint-env mocha */
/* eslint-disable */

import { assert } from 'chai';
import { loadUsers } from 'loaders';
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
  
  it('an equality test', function() {
    assert.equal(2 + 2, 4);
  });
});
