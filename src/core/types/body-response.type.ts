export type IBodyResponse<DataType> = {
  readonly data: DataType;
  readonly metadata?: Record<string, unknown>;
};
