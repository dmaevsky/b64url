const test = require('ava');

const { encode, decode } = require('./index');
const crypto = require('crypto');

test('roundtrip', t => {
  const buffer = crypto.randomBytes(64);
  const buffer1 = decode(encode(buffer));

  buffer.forEach((b, i) => t.is(b, buffer1[i]));
});
