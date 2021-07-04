import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import analyze from 'rollup-plugin-analyzer';
// import { terser } from 'rollup-plugin-terser';

export default {
  input: ['./src/index.js', './src/components/Box/index.js'],
  output: [
    {
      dir: 'dist/components',
      format: 'es',
      exports: 'named',
      sourcemap: false,
    },
  ],
  preserveModules: true,
  external: [
    'react',
    'react-dom',
    'prop-types',
    /@babel\/runtime/,
    '@babel/runtime',
  ],
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
    // terser(),
    analyze(),
  ],
};
