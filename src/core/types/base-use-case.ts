import type { Result } from 'neverthrow';

export interface IBaseUseCase<
  TExecute = unknown,
  TResponse = unknown,
  TError = unknown,
> {
  execute(params: TExecute): Promise<Result<TResponse, TError>>;
}
