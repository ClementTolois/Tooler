export interface IBodyRequest<DataType extends object> {
  readonly data: DataType;
  readonly metadata: Record<string, unknown>;
}
