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

/* Fingers */
let fingersStore: Map<string, number> = new Map();

app.post(
  '/fingers',
  (req: Express.Request, res: Express.Response) => {
    const name: string = req.param("name", "anonymous");
    const value: number = Number(req.param("value", 3));
    fingersStore.set(name, value)
    res.set({ 'Access-Control-Allow-Origin': '*' });
    res.status(201).send('Success');
  });

app.get(
  '/fingers',
  (_req: Express.Request, res: Express.Response) => {
    res.set({ 'Access-Control-Allow-Origin': '*' });
    res.header('Content-Type', 'application/json; charset=utf-8');
    return res.send([...fingersStore]);
  });

/* Reset */
app.post('/reset', (_req: Express.Request, res: Express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  res.header('Content-Type', 'application/json; charset=utf-8');
  fingersStore.clear();
  res.status(201).send({ result: "ok" });
});

/* Listen */
const port = process.env.PORT;
app.listen(
  port,
  () => {
    console.log(`Example app listening on ${port}!`);
  });

export default app;
