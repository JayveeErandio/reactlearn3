import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import ProductCard from "./components/ProductCard.jsx";
import groceryData from "./data/products.js";

export default function App() {
  const [count, setCount] = useState(3);
  return (
    <div
      className="min-h-screen pt-6 lg:pt-12"
      style={{
        background: "var(--background1)",
      }}
    >
      <div className="mx-6 lg:mx-40">
        <Header className="sticky top-0 z-2" />
        <div>
          {groceryData.map((category) => (
            <div
              key={category.id}
              className="grid justify-center gap-4 [grid-template-columns:repeat(auto-fit,132px)]"
            >
              <p
                className="mt-6 col-span-full font-bold text-2xl"
                style={{ color: "var(--color1)" }}
              >
                {category.name}
              </p>
              {category.products.map((products) => (
                <ProductCard
                  key={products.id}
                  name={products.name}
                  price={products.price?.toFixed(2)}
                />
              ))}
              <div className="h-6 col-span-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
