// eslint-disable-next-line no-unused-vars
declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
  }
}
