import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { CSVLoader } from "langchain/document_loaders/fs/csv";
import {
  VectorStoreToolkit,
  createVectorStoreAgent,
  VectorStoreInfo,
} from "langchain/agents";
import { OpenAI } from "langchain/llms/openai";
import { sendSuccessMsg } from "../../commons/response";

const model = new OpenAI({
  temperature: 0,
  openAIApiKey: process.env.OPENAI_API_KEY,
});

const createSuggestion = async (req: any, res: any) => {
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
  return sendSuccessMsg(res, {
    data: result.output,
    message: "answer successfully generated!",
  });
};

export { createSuggestion };
