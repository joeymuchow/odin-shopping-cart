import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/routes/app";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/The Shopping Cart/i);
  });
});