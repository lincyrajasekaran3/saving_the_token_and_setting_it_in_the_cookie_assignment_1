const jwt = require('jsonwebtoken');
const encrypt = require('./utils/encrypt');
const decrypt = require('./utils/decrypt');
const { JWT_SECRET } = require('./config');

function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

// Sample Payload
const payload = { userId: 123, role: 'admin' };

// Step 1: Generate JWT
const token = generateToken(payload);
console.log('Original JWT:', token);

// Step 2: Encrypt JWT
const encryptedToken = encrypt(token);
console.log('Encrypted JWT:', encryptedToken);

// Step 3: Decrypt JWT
const decryptedToken = decrypt(encryptedToken);
console.log('Decrypted JWT:', decryptedToken);

// Step 4: Verify Decrypted JWT
try {
  const decoded = verifyToken(decryptedToken);
  console.log('✅ Success! Decoded Payload:', decoded);
} catch (error) {
  console.error('❌ Decryption Failed:', error.message);
}