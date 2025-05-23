function calculateCartTotal(cart) {
  let total = 0;

  if (cart) {
    for (const item of cart) {
      total += item.price * item.quantity;
    }
  }

  return total;
}

export { calculateCartTotal }