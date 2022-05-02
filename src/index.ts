import { Command } from './Command'
import * as express from 'express';
import * as dotenv from 'dotenv';
import * as fs from 'fs'

const env = dotenv.parse(fs.readFileSync(__dirname + `/../environments/${process.env.NODE_ENV}.env`));
const app = express();

const commands: Command[] = []

app.use(express.json())

// Just get the current state of the state machine
app.get('/', (req, res) => {
    res.send(`nothing yet`);
})

app.listen(env.PORT, () => {
    console.log(`[server]: Server is running at https://localhost:${env.PORT}`);
})
