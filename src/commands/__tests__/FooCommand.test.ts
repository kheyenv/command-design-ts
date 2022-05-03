import FooCommand from '../FooCommand'

describe('FooCommand', () => {
    const spiedConsole = jest.spyOn(console, 'log')
    beforeAll(() => {
        jest.resetAllMocks()
    })
    it('Happy', () => {
        const uut = new FooCommand('1234')
        uut.execute()
        expect(spiedConsole.mock.calls[0][0]).toEqual('Foo did something with 1234...')
    })
})