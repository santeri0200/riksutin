import { defineConfig } from 'rollup'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  input: 'src/server/index.ts',
  output: {
    file: 'server.js',
    format: 'module',
  },
  plugins: [
    resolve(),
    typescript({
      tsconfig: 'src/server/tsconfig.json',
    }),
  ],
  external: (id) => {
    // Exclude external dependencies that are in node_modules
    return /node_modules/.test(id);
  },
});
