class AppError extends Error {
  constructor(
    message: string,
    public code?: string,
  ) {
    super(message);
    this.name = 'AppError';
  }
}

const handleError = (message: string | 'default', code?: string): never => {
  throw new AppError(message, code);
};

export default handleError;
