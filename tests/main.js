/* eslint-env mocha */
/* eslint-disable */

import { assert } from 'chai';
import mockery from 'mockery';
import sinon from 'sinon';

describe('main.js', function() {
  let clickHandlerStub = sinon.stub();

  let main;

  before(function() {
    document.body.innerHTML = `<button id="search">search</button>`;
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
    mockery.registerMock('bootstrap/dist/css/bootstrap.css', undefined);
    mockery.registerMock('./handlers',  { handleSearchClick: clickHandlerStub });

    main = require('../src/main').default;

    // const loadEvent = new Event('DOMContentLoaded');
    // document.dispatchEvent(loadEvent);
  });

  it('works', function() {
    let button = document.querySelector('#search');
    main();
    assert.isFalse(clickHandlerStub.calledOnce);
    button.click();
    assert.isTrue(clickHandlerStub.calledOnce);
  });
});
