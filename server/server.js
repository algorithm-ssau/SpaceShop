import express from 'express'

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = 3000;
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'))
})

app.listen(PORT, () => {
    console.log('Server on port ${PORT}...')
})