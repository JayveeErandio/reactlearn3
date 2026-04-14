import { useState, useEffect, useContext, useRef } from "react";
import { UserContext } from "./data/userdata.jsx";
import groceryData from "./data/products.js";
import ProductCard from "./components/ProductCard.jsx";
import CartPage from "./components/CartPage.jsx";
import CartButton from "./components/CartButton.jsx";
import ModalPurchase from "./components/ModalPurchase.jsx";
import CartLogo from "./components/CartLogo.jsx";
import SearchBar from "./components/SearchBar.jsx";
import DarkModeButton from "./components/DarkModeButton.jsx";

function including(basis, target) {
  return target.toLowerCase().includes(basis.toLowerCase().trim());
}

export default function App() {
  function globalSetup() {
    return { searchText: "" };
  }
  const [global, setGlobal] = useState(globalSetup());

  const { userData, setUserData } = useContext(UserContext);
  const [showPurchase, setShowPurchase] = useState(false);
  const [cost, setCost] = useState(0);
  const [search, setSearch] = useState("");
  const [showIntro, setShowIntro] = useState(true);
  const [animation, setAnimation] = useState("idle");
  const isStarted = useRef(false);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    if (isStarted.current) return;
    isStarted.current = true;

    async function animate() {
      await sleep(200);
      setAnimation("seek");
      await sleep(1550);
      setAnimation("");
      await sleep(2000);
      setShowIntro(false);
      document.body.style.overflow = "";
    }
    animate();
  }, []);

  useEffect(() => {
    if (showIntro) document.querySelector("body").style.overflow = "hidden";
  }, [showIntro]);

  return (
    <>
      {/* Main Body - Scrollable Content */}
      <div className="bg-(--background1) min-h-screen">
        {/* Body's Marginized Container */}
        <div className="mx-6 lg:mx-40">
          <header className="sticky flex justify-between items-center gap-5 top-0 z-2 py-6 bg-(--background1)">
            <SearchBar
              className="w-full lg:w-1/2"
              value={global.searchText}
              set={(value) => {
                setGlobal({
                  ...global,
                  searchText: value,
                });
              }}
            />
            <div className="flex w-max items-center gap-7">
              <DarkModeButton className="h-8" />
              <CartButton
                className="w-14 relative text-xs hidden lg:block"
                quantity={(() => {
                  let overall = 0;
                  for (let prod of userData.cart) {
                    overall += prod.quantity;
                  }
                  return overall;
                })()}
              />
            </div>
          </header>
          <div className="pb-30">
            {groceryData.map((category) => {
              let matchCategory = including(global.searchText, category.name); //Search Algorithm
              let matchProduct = //Search Algorithm: Whether this category has at least one product matching the search term
                category.products.find((prod) => {
                  return including(global.searchText, prod.name);
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
                    let temp = including(global.searchText, product.name);
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

      {/*Intro Frame*/}
      <div
        className={
          (!showIntro ? "hidden" : "") +
          " z-5 flex items-center justify-center fixed top-0 left-0 w-full h-full bg-(--background1)"
        }
      >
        <div className="flex relative">
          <p className="top-1/2 text-lg absolute left-1/2 -translate-x-1/2 text-center w-max text-(--color1)">
            Please Wait
          </p>
          <div className="z-1 w-screen justify-center flex bg-(--background1)">
            <div className="flex items-center w-max">
              <CartLogo
                animation={animation}
                className="w-21 h-21 filter-(--invert)"
              />
              <div
                className={
                  (animation != "" ? "w-0" : "w-58") +
                  " overflow-hidden justify-end flex"
                }
                style={{ transition: "all 0.6s" }}
              >
                <p className="ml-auto  font-bold text-5xl text-(--color1)">
                  Grocerian
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
