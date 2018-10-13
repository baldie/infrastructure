const index = require('../src/index')
describe('index', () => {
    it('launches app', () => {
        expect(index.app).not.toBeNull()
        index.server.close()
    })
})