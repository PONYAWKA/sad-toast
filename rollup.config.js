import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import { fileURLToPath } from "url";
import { babel } from "@rollup/plugin-babel";
import path from "path"; 
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const Resolver = resolve({
  extensions: [".mjs", ".ts", ".tsx", ".json"],
  browser: true,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: "src/index.ts",
    external: ["styled-components"],
    output: [
      {
        file: "RollDown/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "RollDown/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      alias({
        entries: [
          {
            find: "components",
            replacement: path.resolve(__dirname, "src/components"),
          },
          {
            find: "Hooks",
            replacement: path.resolve(__dirname, "src/Hooks"),
          },
          {
            find: "Types",
            replacement: path.resolve(__dirname, "src/Types"),
          },
          {
            find: "utils",
            replacement: path.resolve(__dirname, "src/utils"),
          },
        ],
        Resolver,
      }),
    ],
  },
];
