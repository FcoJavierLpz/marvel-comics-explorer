import React from "react";

const ErrorFallback: React.FC<{
  error: Error;
  resetErrorBoundary: () => void;
}> = ({ error, resetErrorBoundary }) => (
  <div>
    <h1>Algo salió mal:</h1>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Intenta de nuevo</button>
  </div>
);

export default ErrorFallback;
