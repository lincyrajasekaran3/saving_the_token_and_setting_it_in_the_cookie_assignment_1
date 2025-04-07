const crypto = require('crypto');
const { ENCRYPTION_KEY, ALGORITHM, IV } = require('../config');

function encrypt(text) {
  const cipher = crypto.createCipheriv(
    ALGORITHM,
    Buffer.from(ENCRYPTION_KEY),
    IV
  );
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

module.exports = encrypt;