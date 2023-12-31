export default function calculateTotal(array) {
  const sumArr = array.map((item) => {
    return item.quantity * +item.price;
  });

  let total = sumArr.reduce((acc, curr) => acc + curr, 0);
  total = parseFloat(total).toFixed(2);
  return total;
}
