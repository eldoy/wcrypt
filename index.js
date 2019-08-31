const crypto = require('crypto')

const defaultConfig = {
  algorithm: 'aes-192-cbc',
  password: 'password',
  salt: 'salt',
  length: 24
}

module.exports = function(customConfig = {}) {
  const config = Object.assign({}, defaultConfig, customConfig)

  function crypt(string, type = 'cipher') {
    const key = crypto.scryptSync(config.password, config.salt, config.length)
    const iv = Buffer.alloc(16, 0)
    const name = type[0].toUpperCase() + type.substring(1).toLowerCase()
    const fn = crypto[`create${name}iv`](config.algorithm, key, iv)
    const [readMode, writeMode] = type === 'cipher' ? ['hex', ''] : ['utf8', 'hex']

    return new Promise(resolve => {
      let result = ''
      fn.on('readable', () => {
        let chunk
        while ((chunk = fn.read()) !== null) {
          result += chunk.toString(readMode)
        }
      })
      fn.on('end', () => {
        resolve(result)
      })
      fn.write(string, writeMode)
      fn.end()
    })
  }

  return {
    encrypt: function(string) {
      return crypt(string)
    },
    decrypt: async function(string) {
      return crypt(string, 'decipher')
    }
  }
}

