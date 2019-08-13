import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: './index.js',
    plugins: [terser()],
    output: {
      file: 'umd/DateLib.js',
      format: 'umd',
      name: 'DateLib',
      esModule: false
    }
  },
  {
    input: './index.js',
    output: {
      file: 'esm/DateLib.js',
      format: 'esm'
    }
  }
];