const categories = [
  {
    id: 1,
    name: "Dairy",
    products: [
      { id: 101, name: "milk", price: 115.05 },
      { id: 102, name: "chocolate milk", price: 114.15 },
      { id: 103, name: "butter", price: 97 },
      { id: 104, name: "cheese", price: 53.75 },
      { id: 105, name: "yogurt", price: 30.05 },
      { id: 106, name: "condensed milk", price: 45.45 },
      { id: 107, name: "evaporated milk", price: 51.85 },
    ],
  },
  {
    id: 2,
    name: "Bread & Grains",
    products: [
      { id: 201, name: "white bread", price: 85 },
      { id: 202, name: "wheat bread", price: 70.5 },
      { id: 203, name: "white rice", price: 192 },
      { id: 204, name: "brown rice", price: 203.5 },
      { id: 205, name: "oats", price: 85.95 },
      { id: 206, name: "flour", price: 48.05 },
      { id: 207, name: "pasta", price: 51.45 },
    ],
  },
  {
    id: 3,
    name: "Fruits Veggies",
    products: [
      { id: 301, name: "banana", price: 85 },
      { id: 302, name: "carrot", price: 89 },
      { id: 303, name: "onion", price: 23 },
      { id: 304, name: "garlic", price: 23 },
      { id: 305, name: "mango", price: 144 },
      { id: 306, name: "apple", price: 50 },
      { id: 307, name: "grapes", price: 316 },
      { id: 308, name: "pineapple", price: 159 },
      { id: 309, name: "potato", price: 43 },
    ],
  },
  {
    id: 4,
    name: "Meat & Proteins",
    products: [
      { id: 401, name: "poultry", price: 295.5 },
      { id: 402, name: "pork", price: 219 },
      { id: 403, name: "beef steak", price: 323 },
      { id: 404, name: "beef rib", price: 550 },
      { id: 405, name: "bacon", price: 166.85 },
      { id: 406, name: "hotdog", price: 78.75 },
      { id: 407, name: "fish", price: 257 },
      { id: 408, name: "eggs", price: 99 },
    ],
  },
  {
    id: 5,
    name: "Condiments",
    products: [
      { id: 501, name: "coffee", price: 85 },
      { id: 502, name: "sugar", price: 51.95 },
      { id: 503, name: "salt", price: 14.35 },
      { id: 504, name: "pepper", price: 17.15 },
      { id: 505, name: "ketchup", price: 29.75 },
      { id: 506, name: "vinegar", price: 44.65 },
      { id: 507, name: "soy sauce", price: 24.35 },
      { id: 508, name: "mayo", price: 118.66 },
    ],
  },
  {
    id: 6,
    name: "Hygiene",
    products: [
      { id: 601, name: "soap", price: 34 },
      { id: 602, name: "shampoo", price: 138.65 },
      { id: 603, name: "toothbrush", price: 22 },
      { id: 604, name: "toothpaste", price: 52.95 },
      { id: 605, name: "deodorant", price: 140.75 },
      { id: 606, name: "alcohol", price: 93.45 },
      { id: 607, name: "facial wash", price: 278.32 },
      { id: 608, name: "tissue", price: 39.35 },
      { id: 609, name: "laundry powder", price: 45.65 },
      { id: 610, name: "sanitary pads", price: 30.05 },
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
