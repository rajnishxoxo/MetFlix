import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    define: {
      'process.env.openAI_keys': JSON.stringify(env.openAI_keys),
    },
    plugins: [react()],
  });
};
