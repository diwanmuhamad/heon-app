import express from "express";
import * as dotenv from "dotenv";
import { OpenAI } from "langchain/llms/openai";

dotenv.config();

const app = express();

const model = new OpenAI({
  temperature: 0.9,
  openAIApiKey: process.env.OPENAI_API_KEY,
});

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json({
    data: 'hello world',
    message: "hello world",
  });
})

app.get("/test-ai", async (req, res) => {
  const result = await model.call(
    "What's a good idea for an application to build with GPT-3?"
  );
  return res.json({
    data: result,
    message: "test langChain",
  });
})

const port = process.env.PORT || 3000

app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:${port}`)
);
