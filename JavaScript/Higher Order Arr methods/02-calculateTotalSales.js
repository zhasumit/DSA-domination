function calculateTotalSalesWithTax(products, taxRate) {
    const sales = products.reduce((sum, product) => {
        return sum + product["price"] * product["quantity"];
    }, 0);
    const taxAmount = (sales * taxRate) / 100;
    return sales + taxAmount;
}

const products = [
    { name: "Apple", price: 0.5, quantity: 10 },
    { name: "Banana", price: 0.3, quantity: 20 },
    { name: "Orange", price: 0.6, quantity: 15 },
];
let result = calculateTotalSalesWithTax(products, 8);
console.log(result);

result = calculateTotalSalesWithTax(
    [
        { name: "Chocolate", price: 2.5, quantity: 5 },
        { name: "Chips", price: 1.2, quantity: 10 },
        { name: "Soda", price: 1.0, quantity: 8 },
        { name: "Candy", price: 0.5, quantity: 15 },
    ],
    5
);
console.log(result);
