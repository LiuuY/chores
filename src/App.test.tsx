import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import App from "./App";

test("renders learn react link", async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const linkElement = screen.getByText(/Home/i);

  await waitFor(() => {
    expect(linkElement).toBeInTheDocument();
  });
});
