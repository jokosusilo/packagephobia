import { createServer } from 'http';
import { lambda } from './lambda';

const { PORT = 3107 } = process.env;

createServer(lambda).listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});
