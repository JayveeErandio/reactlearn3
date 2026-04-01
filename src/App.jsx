import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";

export default function App() {
  const [count, setCount] = useState(3);

  return (
    <div
      className="h-screen pt-6 lg:pt-12"
      style={{
        background: "var(--background1)",
      }}
    >
      <div className="mx-6 lg:mx-40">
        <Header />
      </div>
    </div>
  );
}
