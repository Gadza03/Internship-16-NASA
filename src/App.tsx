import { BrowserRouter } from "react-router";
import Router from "./Router";
import { ThemeProvider } from "./contexts";
import { LoaderProvider } from "./contexts";

function App() {
  return (
    <ThemeProvider>
      <LoaderProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </LoaderProvider>
    </ThemeProvider>
  );
}

export default App;
