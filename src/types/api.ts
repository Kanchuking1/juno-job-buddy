export type ApiResponse<T> = {
  data?: T;
  error?: string;
  status: number;
};

export type ApiErrorResponse = {
  error: string;
  status: number;
  timestamp?: string;
};

export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
};

export type ApiQueryParams = {
  search?: string;
  status?: string;
  sort?: string;
  order?: "asc" | "desc";
  page?: number;
  limit?: number;
};
