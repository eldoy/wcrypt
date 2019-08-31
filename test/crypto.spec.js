const wcrypt = require('../index.js')()

describe('crypto', () => {
  it('should encrypt and decrypt a string', async () => {
    const encrypted = await wcrypt.encrypt('string')
    expect(encrypted).toBeDefined()
    expect(encrypted.length).toBe(32)

    const decrypted = await wcrypt.decrypt(encrypted)
    expect(decrypted).toBe('string')
  })
})
