var assert = require('assert')

function test() {
  assert.equal(2 + 2, 4);
}

if (module == require.main) require('test').run(test);
//just a new comment but ignore this
