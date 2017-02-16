const test = require('ava');
const index = require('../src');

test("index('hoge')", t => {
  t.is(index('hoge'), 'Hello hoge');
});
