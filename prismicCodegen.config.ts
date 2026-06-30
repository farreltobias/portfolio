import type { Config } from 'prismic-ts-codegen';

const config: Config = {
  repositoryName: 'farrel-portfolio',
  output: './src/prismicio/types.ts',
  models: ['./customtypes/*/index.json', './slices/*/model.json'],
};

export default config;
