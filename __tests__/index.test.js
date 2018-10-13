const index = require('../src/index')

jest.mock('redis', () => {
    return {
        createClient: () => ({ get: jest.fn(), set: jest.fn() })
    }
})
describe('index', () => {
    it('launches app', () => {
        expect(index.app).not.toBeNull()
        index.server.close()
    })
})