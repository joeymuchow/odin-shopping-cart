import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "../src/components/Nav";

describe("Nav component", () => {
  it("renders nav links", () => {
    render(<Nav />, {wrapper: BrowserRouter});
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
    expect(links[0].textContent).toMatch(/Home/i);
    expect(links[1].textContent).toMatch(/Shop/i);
    expect(links[2].textContent).toMatch(/Cart/i);
  });
});