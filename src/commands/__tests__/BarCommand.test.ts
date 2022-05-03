import BarCommand from '../BarCommand'

describe('BarCommand', () => {
    const spiedConsole = jest.spyOn(console, 'log')
    beforeAll(() => {
        jest.resetAllMocks()
    })
    it('Happy', () => {
        const uut = new BarCommand('1', '2')
        uut.execute()
        expect(spiedConsole).toBeCalledTimes(2)
        expect(spiedConsole.mock.calls[0][0]).toEqual('Bar did something with 1...')
        expect(spiedConsole.mock.calls[1][0]).toEqual('Bar then did something with 2...')
    })
})