const calculateTotal = (itemName, quantity = 1, price) => {
    const total = quantity * price;
    return `You ordered ${quantity} ${itemName} at ₹${price} each. <br> Total: ₹${total}.`;
};
document.getElementById("billingForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const { value: itemName } = document.getElementById("itemName");
    const { value: quantity } = document.getElementById("quantity");
    const { value: price } = document.getElementById("price");

    const qty = quantity ? parseInt(quantity) : undefined;
    const cost = parseFloat(price);
    const message = calculateTotal(itemName, qty, cost);
    document.getElementById("result").innerHTML = message;
});