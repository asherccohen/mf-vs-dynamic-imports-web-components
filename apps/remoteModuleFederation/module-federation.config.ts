import { ModuleFederationConfig } from '@nx/rspack/module-federation';

const config: ModuleFederationConfig = {
  name: 'remoteModuleFederation',
  exposes: {
    './Module': './src/remote-entry.ts',
    './DynamicImportsModule': './src/app/dynamic-imports/index.ts',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
