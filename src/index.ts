import { Command } from './Command'
import * as express from 'express';
import * as dotenv from 'dotenv';
import * as fs from 'fs'
import FooCommand from './commands/FooCommand';
import BarCommand from './commands/BarCommand';

const env = dotenv.parse(fs.readFileSync(__dirname + `/../environments/${process.env.NODE_ENV}.env`));
const app = express();

const commands: Command[] = []

app.use(express.json())

// Just get the current state of the state machine
app.get('/', (req, res) => {
    res.send(`Current commands: ${commands}`);
})

app.get('/foo', (req, res) => {
    commands.push(new FooCommand(req.query.payload))
    res.send(`Added foo command with payload: ${req.query.payload}`);
})

app.get('/bar', (req, res) => {
    commands.push(new BarCommand(req.query.a, req.query.b))
    res.send(`Added bar command with payload: (a:${req.query.a}, b:${req.query.b}`);
})

app.get('/execute', (req, res) => {
    while(commands.length > 0) {
        commands.pop().execute()
    }
})

app.listen(env.PORT, () => {
    console.log(`[server]: Server is running at https://localhost:${env.PORT}`);
})
