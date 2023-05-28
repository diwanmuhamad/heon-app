import express from "express";
import * as dotenv from "dotenv";
import { OpenAI } from "langchain/llms/openai";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { CSVLoader } from "langchain/document_loaders/fs/csv";
import {
  VectorStoreToolkit,
  createVectorStoreAgent,
  VectorStoreInfo,
} from "langchain/agents";

dotenv.config();

const app = express();

const model = new OpenAI({
  temperature: 0,
  openAIApiKey: process.env.OPENAI_API_KEY,
});

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json({
    data: 'hello world',
    message: "hello world",
  });
})

app.post("/suggestions", async (req, res) => {
  const reqBody = JSON.parse(JSON.stringify(req?.body));
  const loader = new CSVLoader("src/files/msmes.csv");

  const docs = await loader.load();
  /* Create the vectorstore */
  const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());

  /* Create the agent */
  const vectorStoreInfo: VectorStoreInfo = {
    name: "msmes_matchmaking",
    description: "MSMEs matchmaking",
    vectorStore,
  };

  const toolkit = new VectorStoreToolkit(vectorStoreInfo, model);
  const agent = createVectorStoreAgent(model, toolkit);

  const input = `${reqBody?.question}`;
  console.log(`Executing: ${input}`);

  const result = await agent.call({ input });
  return res.status(200).json({
    data: result.output,
    message: "answer successfully generated!",
  });
})

const port = process.env.PORT || 3000

app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:${port}`)
);
