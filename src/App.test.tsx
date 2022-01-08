import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const linkElement = screen.getByText(/Eu estou na master pela develop/i);
  expect(linkElement).toBeInTheDocument();
});
