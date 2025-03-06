type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  return (
    <div className="error-container">
      <div className="error-wrapper">
        <h2>Ooops!</h2>
        <p>Error: {error.message}</p>
        <button onClick={resetErrorBoundary}> Try again</button>
      </div>
    </div>
  );
}
