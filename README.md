# Wcrypt

Encrypt and decrypt strings with Node.js

### Install
`npm i wcrypt`

### Usage
```javascript
/* Default options shown */
const wcrypt = require('wcrypt')({
  algorithm: 'aes-192-cbc',
  password: 'password',
  salt: 'salt',
  length: 24
})

/* Encrypt a string */
const encrypted = await wcrypt('clear text string')
// e1ec7507554a2ce8c5d13b01f803c64f3b95c08d8a9b61e964f78d7656bbecb9

/* Decrypt a string */
const decrypted = await wcrypt(encrypted)
// clear text string
```
MIT licensed. Enjoy!
