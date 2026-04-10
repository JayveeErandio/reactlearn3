import { useState, useEffect, useContext, use } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import ProductCard from "./components/ProductCard.jsx";
import groceryData from "./data/products.js";
import CartPage from "./components/CartPage.jsx";
import CartButton from "./components/CartButton.jsx";
import ModalPurchase from "./components/ModalPurchase.jsx";
import { UserContext } from "./data/userdata.jsx";
import { including } from "./functions.js";

export default function App() {
  const { userData, setUserData } = useContext(UserContext);
  const [showPurchase, setShowPurchase] = useState(false);
  const [cost, setCost] = useState(0);
  const [search, setSearch] = useState("");

  return (
    <>
      <div
        className="min-h-screen pt-6 lg:pt-12"
        style={{
          background: "var(--background1)",
        }}
      >
        <div className="mx-6 lg:mx-40">
          <Header className="sticky top-0 z-2" setSearch={setSearch} />
          <div>
            {groceryData.map((category) => {
              let matchCategory = including(search, category.name); //Search Algorithm
              let matchProduct = //Search Algorithm: Whether this category has at least one product matching the search term
                category.products.find((prod) => {
                  return including(search, prod.name);
                })
                  ? true
                  : false;
              return (
                <div
                  key={category.id}
                  className={
                    (!matchCategory ? (!matchProduct ? "hidden" : "") : "") +
                    " grid justify-center gap-4 [grid-template-columns:repeat(auto-fit,132px)]"
                  }
                >
                  <p
                    className="mt-6 col-span-full font-bold text-2xl"
                    style={{ color: "var(--color1)" }}
                  >
                    {category.name}
                  </p>
                  {category.products.map((product) => {
                    let temp = including(search, product.name);
                    return (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        className={
                          !matchCategory ? (!temp ? "hidden" : "") : ""
                        }
                      />
                    );
                  })}
                  <div className="h-6 col-span-full"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <CartButton
        quantity={(() => {
          let overall = 0;
          for (let prod of userData.cart) {
            overall += prod.quantity;
          }
          return overall;
        })()}
        className="fixed bottom-8 right-8 z-1 w-21 lg:hidden"
      />
      <CartPage setPurchase={setShowPurchase} setCost={setCost} />
      <ModalPurchase cost={cost} state={[showPurchase, setShowPurchase]} />
    </>
  );
}
