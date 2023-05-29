import express from "express";
import * as dotenv from "dotenv";
import { sequelize } from './commons/db'
import {
  router
} from './routes'
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

// body-parser
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use('/', router);

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json({
    data: 'hello world',
    message: "hello world",
  });
})

const port = process.env.PORT || 3000

app.listen(port, async () => {
  await sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    console.log(`
  🚀 Server ready at: http://localhost:${port}`)
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  })
});
