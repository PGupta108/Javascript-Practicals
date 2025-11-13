let cart = [
  { id: 1, name: "Pen", price: 20, qty: 2, category: "stationery" },
  { id: 2, name: "Mug", price: 150, qty: 1, category: "kitchen" },
  { id: 3, name: "Notebook", price: 80, qty: 3, category: "stationery" },
  { id: 4, name: "Headphones", price: 300, qty: 1, category: "electronics" }
];
let itemTotals = cart.map(item => item.price * item.qty);
let discountedItems = cart.map(item => {
  let subtotal = item.price * item.qty;
  let discount = 0;
  if (item.qty >= 3) {
    discount = subtotal * 0.05;
    subtotal -= discount;
  }
  return { ...item, subtotal, discount };
});
let stationeryItems = cart.filter(item => item.category === "stationery");
let stationeryTotal = stationeryItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
let stationeryDiscount = stationeryTotal > 200 ? stationeryTotal * 0.10 : 0;
let subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
let itemDiscountTotal = discountedItems.reduce((sum, item) => sum + item.discount, 0);
let finalTotal = subtotal - itemDiscountTotal - stationeryDiscount;
let output = "";
discountedItems.forEach(item => {
  let line = `Item: ${item.name} (x${item.qty}) = ${item.price * item.qty}`;
  if (item.qty >= 3) line += " → discount applied";
  output += line + "\n";
});
output += `Subtotal: ${subtotal.toFixed(2)}\n`;
output += `Item Discounts: ${itemDiscountTotal.toFixed(2)}\n`;
output += `Stationery Discount: ${stationeryDiscount.toFixed(2)}\n`;
output += `Final Total: ${finalTotal.toFixed(2)}\n`;
document.getElementById("output").textContent = output;
console.log(output);