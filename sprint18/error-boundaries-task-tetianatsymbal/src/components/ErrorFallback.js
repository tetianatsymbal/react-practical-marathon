function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="data">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default ErrorFallback;
