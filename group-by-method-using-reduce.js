// Array of orders, each containing a category, title, and amount
const orders = [
  { category: "electronics", title: "Smartphone", amount: 100 },
  { category: "electronics", title: "Laptop", amount: 200 },
  { category: "clothing", title: "T-shirt", amount: 50 },
  { category: "clothing", title: "Jacket", amount: 100 },
  { category: "groceries", title: "Apples", amount: 10 },
];

// Use the reduce method to group orders by their category
const groupByCategory = orders.reduce((acc, order) => {
  // Destructure the category from the current order
  const { category } = order;

  // If the category doesn't exist in the accumulator object, initialize it with an empty array
  if (!acc[category]) {
    acc[category] = [];
  }

  // Push the current order into the array for its corresponding category
  acc[category].push(order);

  // Return the accumulator for the next iteration
  return acc;
}, {}); // Initialize the accumulator as an empty object

// Log the final grouped object to the console
console.log(groupByCategory);
