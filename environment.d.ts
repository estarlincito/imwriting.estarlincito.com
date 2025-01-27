/* eslint-disable import/no-unused-modules */

declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
  }
}
