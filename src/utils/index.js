/**
 * Calcula el precio total de un array de productos
 * @param {Array} products - Lista de productos con propiedad .price
 * @returns {Number} - Total sumado y redondeado a 2 decimales
 */
export const totalPrice = (products) => {
  if (!products || products.length === 0) return 0;
  const sumTotal = products.reduce((sum, product) => sum + product.price, 0);

  return Number(sumTotal.toFixed(2));
};
