import {defineConfig} from "vite";
import {fileURLToPath} from "node:url";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    outDir: fileURLToPath(new URL("dist", import.meta.url)),
    lib: {
      entry: [
        fileURLToPath(new URL("index.tsx", import.meta.url)),
      ],
      formats: ["es"],
    },
  },
  plugins: [
    dts({
      include: ["index.tsx"],
    }),
  ],
});
