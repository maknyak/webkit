import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import analyze from 'rollup-plugin-analyzer';
import { terser } from 'rollup-plugin-terser';

export default {
  input: ['./src/components/Box/index.js', './src/components/Card/index.js'],
  output: [
    {
      dir: 'dist/components',
      format: 'cjs',
      exports: 'named',
      sourcemap: false,
    },
  ],
  preserveModules: true,
  plugins: [
    alias({
      entries: [{ find: '@components', replacement: './src/components' }],
    }),
    del({ targets: 'dist/*', hook: 'buildStart', verbose: false }),
    peerDepsExternal({
      includeDependencies: true,
    }),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx'],
    }),
    resolve({ extensions: ['.js', '.jsx'] }),
    terser(),
    analyze(),
  ],
};
