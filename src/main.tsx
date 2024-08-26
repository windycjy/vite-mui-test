import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import defaultTheme, { purple } from "./themes";

// defining theme color for multi brand
const getTheme = () => {
  switch (import.meta.env.VITE_BRAND) {
    case "purple":
      return purple;
    default:
      return defaultTheme;
  }
};
const theme = getTheme();

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            backgroundColor: theme.palette.grey[100],
            height: "100vh",
            overflow: "auto",
          }}
        >
          <App />
        </Container>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
