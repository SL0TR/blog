export class QueryResponseDTO<T> {
  data: T[];
  success: boolean;
  totalCount?: number;
}
