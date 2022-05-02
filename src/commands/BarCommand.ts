import { Command } from '../Command'

class BarCommand implements Command {
    private _a: string
    private _b: string

    constructor(a: string, b: string) {
        this._a = a
        this._b = b
    }

    execute(): void {
        console.log(`Bar did something with ${this._a}...`)
        console.log(`Bar then did something with ${this._b}...`)
    }
}

export default BarCommand