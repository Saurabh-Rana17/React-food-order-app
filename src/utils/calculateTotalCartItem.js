export function calculateTotalCartItem(array = []) {
  let sum = 0;
  for (let item of array) {
    sum = sum + item.quantity;
  }
  return sum;
}
