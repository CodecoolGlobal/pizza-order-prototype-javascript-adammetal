import express from 'express';
import path from 'path';
import morgan from 'morgan';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const FS_FE_PATH = path.join(__dirname, '..', 'frontend');

const app = express();

app.use(morgan('dev'));
app.use(express.static(FS_FE_PATH));

app.get('/hello', (req, res) => {
  res.json({ msg: 'Hello World' });
})

app.listen(8080, () => {
  console.log('App running on :8080');
});