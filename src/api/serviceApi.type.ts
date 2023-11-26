export interface ApiErrorType {
  status?: number;
  name?: string;
  message?: string;
  details?: string;
}

export interface ApiResponseErrorType {
  data?: null;
  error?: ApiErrorType;
}

export type FirebaseReturn<T> = Promise<[T, null] | [null , string]>;
