# Wcrypt

Encrypt and decrypt strings with Node.js

### Install
`npm i wcrypt`

### Usage
```javascript
const wcrypt = require('wcrypt')

const encrypted = await wcrypt('clear text string')
// e1ec7507554a2ce8c5d13b01f803c64f3b95c08d8a9b61e964f78d7656bbecb9

const decrypted = await wcrypt(encrypted)
// 'clear text string'
```
MIT licensed. Enjoy!
