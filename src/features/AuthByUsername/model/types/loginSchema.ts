export interface LoginErrorSchemaT {
  username?: string;
  password?: string;
  message?: string;
}

export interface LoginSchema {
  username: string;
  password: string;
  isLoading: boolean;
  error?: LoginErrorSchemaT;
}
