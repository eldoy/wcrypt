const wcrypt = require('../index.js')

describe('crypto', () => {
  it('should encrypt and decrypt a string', async () => {
    const crypt = wcrypt()
    const encrypted = await crypt.encrypt('string')
    expect(encrypted).toBeDefined()
    expect(encrypted.length).toBe(32)

    const decrypted = await crypt.decrypt(encrypted)
    expect(decrypted).toBe('string')
  })

  it('should not encrypt and decrypt a string using wrong password', async () => {
    const crypt1 = wcrypt({ password: 'hello' })
    const encrypted = await crypt1.encrypt('string')
    expect(encrypted).toBeDefined()
    expect(encrypted.length).toBe(32)

    const crypt2 = wcrypt({ password: 'bye' })
    let fail
    try {
      await crypt2.decrypt(encrypted)
    } catch (e) {
      fail = e.message
    }
    expect(fail).toBe('error:06065064:digital envelope routines:EVP_DecryptFinal_ex:bad decrypt')
  })

  it('should not encrypt and decrypt a string using wrong salt', async () => {
    const crypt1 = wcrypt({ salt: 'hello' })
    const encrypted = await crypt1.encrypt('string')
    expect(encrypted).toBeDefined()
    expect(encrypted.length).toBe(32)

    const crypt2 = wcrypt({ salt: 'bye' })
    let fail
    try {
      await crypt2.decrypt(encrypted)
    } catch (e) {
      fail = e.message
    }
    expect(fail).toBe('error:06065064:digital envelope routines:EVP_DecryptFinal_ex:bad decrypt')
  })
})
