import 'dotenv/config';
import type { Config } from 'prismic-ts-codegen';

const repositoryName = process.env.PRISMIC_ENVIRONMENT;

if (!repositoryName) {
  throw new Error(
    'Missing PRISMIC_ENVIRONMENT environment variable. Add it to your .env file — see .env.example.',
  );
}

const config: Config = {
  repositoryName,
  customTypesAPIToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
  output: './src/prismicio/types.ts',
  models: { fetchFromRepository: true },
};

export default config;
