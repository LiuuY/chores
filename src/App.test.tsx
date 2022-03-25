import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

import App from "./App";

test("renders learn react link", async () => {
  const queryClient = new QueryClient();

  render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </MemoryRouter>
  );

  const linkElement = screen.getByText(/^Home$/i);

  await waitFor(() => {
    expect(linkElement).toBeInTheDocument();
  });
});
