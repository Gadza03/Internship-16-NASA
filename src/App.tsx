import { BrowserRouter } from "react-router";
import Router from "./Router";
import { ThemeProvider } from "./contexts";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./error";
function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
