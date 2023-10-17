import{openAI_keys} from "../Utils/Contant"
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: openAI_keys,
  dangerouslyAllowBrowser: true,

  
});

export default openai;
