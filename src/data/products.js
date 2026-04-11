const categories = [
  {
    id: 1,
    name: "Dairy",
    products: [
      { id: 101, name: "milk", price: 20 },
      { id: 102, name: "chocolate milk", price: 149.5 },
      { id: 103, name: "butter", price: 173.95 },
      { id: 104, name: "cheese", price: 18 },
      { id: 105, name: "yogurt", price: 36 },
      { id: 106, name: "condensed milk", price: 18 },
      { id: 107, name: "evaporated milk", price: 18 },
    ],
  },
  {
    id: 2,
    name: "Bread & Grains",
    products: [
      { id: 201, name: "white bread", price: 61 },
      { id: 202, name: "wheat bread", price: 25 },
      { id: 203, name: "white rice", price: 437 },
      { id: 204, name: "brown rice", price: 10 },
      { id: 205, name: "oats", price: 10 },
      { id: 206, name: "flour", price: 231.5 },
      { id: 207, name: "pasta", price: 10 },
    ],
  },
  {
    id: 3,
    name: "Fruits Veggies",
    products: [
      { id: 301, name: "banana", price: 35 },
      { id: 302, name: "carrot", price: 30 },
      { id: 303, name: "onion", price: 40 },
      { id: 304, name: "garlic", price: 40 },
      { id: 305, name: "mango", price: 40 },
      { id: 306, name: "apple", price: 40 },
      { id: 307, name: "grapes", price: 40 },
      { id: 308, name: "pineapple", price: 40 },
      { id: 309, name: "potato", price: 40 },
    ],
  },
  {
    id: 4,
    name: "Meat & Proteins",
    products: [
      { id: 401, name: "poultry", price: 35 },
      { id: 402, name: "pork", price: 30 },
      { id: 403, name: "beef steak", price: 40 },
      { id: 404, name: "beef rib", price: 40 },
      { id: 405, name: "bacon", price: 40 },
      { id: 406, name: "hotdog", price: 40 },
      { id: 407, name: "fish", price: 40 },
      { id: 408, name: "eggs", price: 40 },
    ],
  },
];

const prepareProducts = () => {
  return categories.map((category) => ({
    ...category,
    products: category.products.map((product) => ({
      ...product,
    })),
  }));
};

const groceryData = prepareProducts();

export default groceryData;
