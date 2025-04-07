const crypto = require("crypto");
const { ENCRYPTION_KEY, ALGORITHM, IV } = require("../config");

function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(ENCRYPTION_KEY), IV);
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

module.exports = decrypt;