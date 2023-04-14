const resolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const commonjs = require('@rollup/plugin-commonjs');
const terser = require('@rollup/plugin-terser');
const pkg = require('./package.json');

module.exports = {
  input: 'src/index.ts',
  plugins: [
    resolve({
      preferBuiltins: false,
      extensions: ['.js', '.ts', '.json'],
    }),
    typescript(),
    commonjs(),
    terser(),
  ],
  output: {
    file: pkg.main,
    format: 'cjs',
  },
};
