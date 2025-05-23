import { describe, it, expect } from "vitest";
import { calculateCartTotal } from "../src/utilities/calculate";

describe("calculateCartTotal tests", () => {
  it("calculates the price total of one item with quantity of one", () => {
    const cart = [{price: 1, quantity: 1}];
    const result = calculateCartTotal(cart);

    expect(result).toBe(1);
  });

  it("calculates the price total of one item with quantity of three", () => {
    const cart = [{price: 1, quantity: 3}];
    const result = calculateCartTotal(cart);

    expect(result).toBe(3);
  });

  it("calculates the price total of two items", () => {
    const cart = [{price: 1, quantity: 3}, {price: 2, quantity: 1}];
    const result = calculateCartTotal(cart);

    expect(result).toBe(5);
  });

  it("calculates the price total of multiple items with varying qunatities", () => {
    const cart = [{price: 1, quantity: 3}, {price: 2, quantity: 1}, {price: 10, quantity: 4}];
    const result = calculateCartTotal(cart);

    expect(result).toBe(45);
  });

  it("returns zero when cart is empty", () => {
    const cart = [];
    const result = calculateCartTotal(cart);

    expect(result).toBe(0);
  });

  it("returns zero when cart is null", () => {
    const cart = null;
    const result = calculateCartTotal(cart);

    expect(result).toBe(0);
  });

  it("returns zero when cart is undefined", () => {
    const cart = undefined;
    const result = calculateCartTotal(cart);

    expect(result).toBe(0);
  });
});