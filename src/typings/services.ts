export type ErrorType = {}

export type ResolveType<DataType = any> =
  | { resolveType: 'withError'; error: ErrorType }
  | { resolveType: 'withoutError'; data: DataType }
