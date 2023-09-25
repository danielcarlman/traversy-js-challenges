function calculateTotalSalesWithTax(products, taxRate) {
  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return totalPrice * (1 + taxRate / 100);
}

module.exports = calculateTotalSalesWithTax;
