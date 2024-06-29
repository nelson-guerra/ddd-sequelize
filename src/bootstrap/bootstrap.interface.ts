export type TInitialize = boolean | Error;

export interface IBootstrap {
   initialize(): Promise<TInitialize>;
}
