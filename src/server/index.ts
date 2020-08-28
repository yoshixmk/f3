import * as dotenv from 'dotenv';
import Express from 'express';
import { Finger, Fingers } from '../domains/fingers';
import cors from 'cors';

dotenv.config();

const app = Express();
app.use(cors({ origin: true }));
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }));

app.get(
  '/',
  (_req: Express.Request, res: Express.Response) => {
    res.set({ 'Access-Control-Allow-Origin': '*' });
    return res.send('Hello world.')
  });

/* Fingers */
let fingersStore: Map<string, Finger> = new Map();

app.post(
  '/fingers',
  (req: Express.Request, res: Express.Response) => {
    const { name, value } = req.body as Finger;
    fingersStore.set(name, { name, value });
    res.set({ 'Access-Control-Allow-Origin': '*' });
    res.status(201).send('Success');
  });

app.get(
  '/fingers',
  (_req: Express.Request, res: Express.Response) => {
    res.set({ 'Access-Control-Allow-Origin': '*' });
    res.header('Content-Type', 'application/json; charset=utf-8');
    const fingers: Fingers = Array.from(fingersStore.values());
    return res.send(fingers);
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
