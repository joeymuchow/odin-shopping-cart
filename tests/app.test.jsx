import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../src/routes/app";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />, {wrapper: BrowserRouter});
    expect(screen.getByRole("heading").textContent).toMatch(/The Shopping Cart/i);
  });
});