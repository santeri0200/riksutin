import { defineConfig } from 'rollup'
import resolve from '@rollup/plugin-node-resolve'
import swc from '@rollup/plugin-swc'

import path from 'path'

export default defineConfig({
  input: 'index.ts',
  output: {
    file: '../../server.js',
    format: 'module',
  },
  plugins: [
    resolve({
      extensions: [".ts"],
    }),
    swc({
      swc: {
      	"isModule": "unknown",
      	"module": {
      		"type": "nodenext",
      		"noInterop": false
      	},
        jsc: {
      		"target": "esnext",
      		"parser": {
      			"syntax": "typescript",
      			"tsx": false,
      			"exportDefaultFrom": false
      		},

          baseUrl: path.resolve("../.."),
          paths: {
            "@config": ["src/config.ts"],
            "@validators/*": ["src/validators/*"]
          }
        }
      }
    }),
  ],
  external: (id) => {
    // Exclude external dependencies that are in node_modules
    return /node_modules/.test(id);
  },
});
