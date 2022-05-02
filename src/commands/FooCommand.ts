import { Command } from '../Command'

class FooCommand implements Command {
    private _payload: string

    constructor(payload: string) {
        this._payload = payload
    }

    execute(): void {
        console.log(`Foo did something with ${this._payload}...`)
    }
}

export default FooCommand