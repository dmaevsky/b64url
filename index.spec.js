import test from 'node:test';
import assert from 'node:assert/strict';

import { encode, decode }  from './index.js';
import crypto from 'node:crypto';

test('roundtrip', () => {
  const buffer = crypto.randomBytes(64);
  const buffer1 = decode(encode(buffer));

  buffer.forEach((b, i) => assert.equal(b, buffer1[i]));
});
