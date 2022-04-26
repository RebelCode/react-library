import { babel } from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss-modules";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import replace from "rollup-plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";
import cssnano from "cssnano";
import postcssSimpleVars from "postcss-simple-vars";

export default [
  {
    input: "./index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      nodeResolve({
        extensions: [".js", ".tsx"],
      }),
      replace({
        sourcemap: false,
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
      babel({
        babelHelpers: "runtime",
        babelrc: false,
        sourcemap: false,
        exclude: "node_modules/**",
        presets: [
          [
            "@babel/preset-env",
            {
              targets: { esmodules: true },
              bugfixes: true,
              loose: true,
            },
          ],
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
        plugins: [
          "@babel/plugin-syntax-dynamic-import",
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-proposal-export-namespace-from",
          "@babel/plugin-proposal-throw-expressions",
          "@babel/plugin-transform-runtime",
        ],
      }),
      postcss({
        writeDefinitions: true,
        extract: true,
        plugins: [
          autoprefixer(),
          postcssPresetEnv({ stage: 1 }),
          postcssSimpleVars(),
          cssnano({
            preset: "default",
          }),
        ],
        // Or with custom options for `postcss-modules`
        modules: true,
        modules: {},
      }),
      typescript(),
      commonjs({
        sourceMap: false,
        include: "node_modules/**",
        ignoreGlobal: true,
      }),
      terser({
        ecma: 2020,
        mangle: { toplevel: true },
        compress: {
          module: true,
          toplevel: true,
          unsafe_arrows: true,
          drop_console: true,
          drop_debugger: true,
        },
        output: { quote_style: 1 },
      }),
    ],
    external: ["react", "react-dom"],
  },
];
