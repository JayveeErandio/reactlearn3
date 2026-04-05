import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import ProductCard from "./components/ProductCard.jsx";

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
        <div className="grid justify-center gap-5 [grid-template-columns:repeat(auto-fit,150px)]">
          <ProductCard name="milk chocolate" price="875.59" />
          <ProductCard name="butter" price="109.00" />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
