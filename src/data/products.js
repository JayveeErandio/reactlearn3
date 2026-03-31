const categories = [
  {
    name: "Dairy",
    products: [
      { name: "milk", price: 20 },
      { name: "chocolate milk", price: 15 },
      { name: "butter", price: 18 },
      { name: "cheese", price: 18 },
      { name: "yogurt", price: 18 },
      { name: "condensed milk", price: 18 },
      { name: "evaporated milk", price: 18 },
    ],
  },
  {
    name: "Bread & Grains",
    products: [
      { name: "white bread", price: 12 },
      { name: "wheat bread", price: 25 },
      { name: "white rice", price: 10 },
      { name: "brown rice", price: 10 },
      { name: "oats", price: 10 },
      { name: "flour", price: 10 },
      { name: "pasta", price: 10 },
    ],
  },
  {
    name: "Fruits Veggies",
    products: [
      { name: "banana", price: 35 },
      { name: "carrot", price: 30 },
      { name: "onion", price: 40 },
      { name: "garlic", price: 40 },
      { name: "mango", price: 40 },
      { name: "apple", price: 40 },
      { name: "grapes", price: 40 },
      { name: "pineapple", price: 40 },
      { name: "potato", price: 40 },
    ],
  },
];

const prepareProducts = () => {
  return categories.map((category) => ({
    ...category,
    products: category.products.map((product) => ({
      ...product,
      image: `/products/${product.name}.jpg`,
    })),
  }));
};

const groceryData = prepareProducts();

export default groceryData;
