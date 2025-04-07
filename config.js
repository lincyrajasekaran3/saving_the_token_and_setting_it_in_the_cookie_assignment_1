require('dotenv').config();

const encryptionKey =
  process.env.ENCRYPTION_KEY || '01234567890123456789012345678901'; // Default 32-char key

console.log('🔍 ENCRYPTION_KEY Length:', encryptionKey.length);

if (encryptionKey.length !== 32) {
  throw new Error('❌ ENCRYPTION_KEY must be exactly 32 characters long!');
}

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'default_secret',
  ENCRYPTION_KEY: encryptionKey,
  ALGORITHM: 'aes-256-cbc',
  IV: '1234567890123456', // IV should be 16 bytes
};