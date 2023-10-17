import{openAI_keys} from "./Contant"
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: openAI_keys,
  dangerouslyAllowBrowser: true,

  //  defaults to process.env["OPENAI_API_KEY"]
});

export default openai;
