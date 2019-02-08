const assert = require('assert');
const app = require('../../src/app');

describe('\'survey\' service', () => {
  it('registered the service', () => {
    const service = app.service('survey');

    assert.ok(service, 'Registered the service');
  });
});
