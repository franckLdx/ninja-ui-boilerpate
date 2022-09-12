import { defineConfig } from 'rollup';
import typescript from 'rollup-plugin-typescript2';
import { resolve, join, dirname, parse } from 'path';
import { uglify } from 'rollup-plugin-uglify';
import eslint from '@rollup/plugin-eslint';
import analyze from "rollup-plugin-analyzer";
import visualizer from "rollup-plugin-visualizer";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss'
import postcssPresetEnv from 'postcss-preset-env'

// eslint-disable-next-line no-undef
const srcDir = resolve(__dirname, 'src');
// eslint-disable-next-line no-undef
const distDir = join(__dirname, 'dist')

const componentsDir = join(srcDir, 'components');

const componentsName = ['button', 'input']

export default defineConfig({
  input: componentsName.map(componentName => join(componentsDir, componentName, 'index.ts')),
  output: {
    format: 'esm',
    dir: distDir,
    entryFileNames: (chunkInfo) => {
      const parsedPath = parse(dirname(chunkInfo.facadeModuleId))
      return `components/${parsedPath.name}/${parsedPath.name}.js`
    },
  },
  plugins: [
    eslint({
      exclude: ['node_modules/', '**/*.scss']
    }),
    peerDepsExternal(),
    postcss({
      autoModules: true,
      extract: 'fnac-ui.css',
      use: ['sass'],
      minimize: true,
      plugins: [postcssPresetEnv()]
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ['**/*.stories.*', '**/*.css', '**/*.module.scss', 'node_modules'],
      },
    }),
    uglify({
      sourcemap: false,
    }),
    analyze({
      hideDeps: true,
      summaryOnly: true
    }),
    visualizer()
  ]
});