import { describe, it, expect } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Product from "../src/components/Product";

describe("Product component", () => {
  it("increases quantity input on plus button click", () => {
    const Parent = () => {
      return (
        <Product
          id="id"
          description="some thing"
          image="img"
          price={10}
          title="thing"
        />
      );
    };
    render(<Parent />, { wrapper: BrowserRouter });

    const increment = screen.getByRole("button", { name: "+" });
    const quantity = screen.getByRole("spinbutton", { id: "product-id" });

    act(() => {
      increment.click();
    });

    expect(quantity).toHaveValue(2);
  });

  it("decreases quantity input on minus button click", () => {
    const Parent = () => {
      return (
        <Product
          id="id"
          description="some thing"
          image="img"
          price={10}
          title="thing"
        />
      );
    };
    render(<Parent />, { wrapper: BrowserRouter });

    const increment = screen.getByRole("button", { name: "+" });
    const decrement = screen.getByRole("button", { name: "-" });
    const quantity = screen.getByRole("spinbutton", { id: "product-id" });

    act(() => {
      increment.click();
    });

    expect(quantity).toHaveValue(2);

    act(() => {
      decrement.click();
    });

    expect(quantity).toHaveValue(1);
  });

  it("cannot decrease quantity below one", () => {
    const Parent = () => {
      return (
        <Product
          id="id"
          description="some thing"
          image="img"
          price={10}
          title="thing"
        />
      );
    };
    render(<Parent />, { wrapper: BrowserRouter });

    const decrement = screen.getByRole("button", { name: "-" });
    const quantity = screen.getByRole("spinbutton", { id: "product-id" });

    act(() => {
      decrement.click();
    });

    expect(decrement).toBeDefined();
    expect(quantity).toHaveValue(1);
  });
});
