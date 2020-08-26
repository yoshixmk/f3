import * as dotenv from 'dotenv';
import Express from 'express';

dotenv.config();

const app = Express();

app.get(
  '/',
  (_req: Express.Request, res: Express.Response) => {
    res.set({ 'Access-Control-Allow-Origin': '*' });
    return res.send('Hello world.')
  });

const url = process.env.PORT;

app.listen(
  url,
  () => {
    console.log(`Example app listening on ${url}!`);
  });

export default app;
