import { useState, useContext, useEffect } from "react";
import { ProductCarted, UserContext } from "../data/userdata";
import groceryData from "../data/products.js";
import CartedProduct from "./CartedProduct.jsx";
import Checkbox from "./Checkbox.jsx";

export default function CartPage() {
  const { userData, setUserData } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(0);
  function performTotal() {
    let temp = 0;
    for (let product of userData.cart) {
      if (product.isListed)
        temp += getData(product.id).price * product.quantity;
    }
    setTotal(temp);
  }
  useEffect(() => {
    performTotal();
  }, [userData.cart]);

  useEffect(() => {
    if (userData.showCart) setShow(true);
    else {
      setTimeout(function () {
        setShow(false);
        document.querySelector("body").style.overflow = "";
      }, 500);
    }
  }, [userData.showCart]);

  function inAnim() {
    if (window.innerWidth < 1024) return "cartPageMobileIn";
    else return "cartPageDesktopIn";
  }
  function outAnim() {
    if (window.innerWidth < 1024) return "cartPageMobileOut";
    else return "cartPageDesktopOut";
  }

  function getData(id) {
    for (let category of groceryData) {
      for (let product of category.products) {
        if (product.id == id) return product;
      }
    }
  }

  function verifySelection() {
    for (let product of userData.cart) if (!product.isListed) return false;
    return true;
  }

  return (
    <div className={show ? "block" : "hidden"}>
      <div
        className={
          "fixed w-full h-full z-2 bg-black top-0 opacity-30 " +
          (show ? "lg:block" : "")
        }
      ></div>
      <div
        className={
          " w-full lg:w-90 h-full fixed top-0 lg:top-0 lg:right-0 z-2 " +
          (userData.showCart ? inAnim() : outAnim())
        }
        style={{ background: "var(--background1)" }}
      >
        <div className="flex flex-col justify-between h-full pt-12 mx-5 sm:w-110 sm:mx-auto lg:w-auto lg:mx-5">
          <header className="z-1">
            <div className="grid relative items-center">
              <p
                className="leading-6 text-center text-3xl font-bold"
                style={{ color: "var(--color1)" }}
              >
                CART
              </p>
              <img
                className="absolute top-0 h-full cursor-pointer"
                src="icons/back.svg"
                style={{ filter: "var(--invert)" }}
                onClick={() => {
                  setUserData({ ...userData, showCart: false });
                }}
              />
            </div>
            <div
              className="text-sm py-2 shadow-md rounded-xl mt-6 flex"
              style={{
                background: "var(--background2)",
              }}
            >
              <div className="flex-1 border-r-1 border-gray-400">
                <div
                  onClick={() => {
                    setUserData({
                      ...userData,
                      cart: userData.cart.map((item) => ({
                        ...item,
                        isListed: !verifySelection(),
                      })),
                    });
                  }}
                  className="ml-1 cursor-pointer flex gap-1 items-center w-max"
                >
                  <Checkbox
                    check={verifySelection()}
                    color="var(--background1)"
                  />
                  <p style={{ color: "var(--color1)" }}>Select All</p>
                </div>
              </div>
              <div className="flex-1 flex justify-center py-1">
                <button className="cursor-pointer bg-rose-500 text-white px-3 rounded-md active:bg-rose-700">
                  Remove From Cart
                </button>
              </div>
            </div>
          </header>
          <div className="-my-6 overflow-auto flex-1 py-6">
            {(() => {
              if (!userData.cart.length)
                return (
                  <p
                    className="text-center mt-10 opacity-50"
                    style={{ color: "var(--color1)" }}
                  >
                    Your cart is empty yet.
                  </p>
                );
            })()}
            {userData.cart.map((product, index) => (
              <CartedProduct
                quantity={product.quantity}
                setQuantity={(newQuantity) => {
                  setUserData((prev) => ({
                    ...prev,
                    cart: prev.cart.map((item) =>
                      item.id === product.id
                        ? { ...item, quantity: newQuantity }
                        : item,
                    ),
                  }));
                }}
                check={product.isListed}
                setCheck={() => {
                  setUserData((prev) => ({
                    ...prev,
                    cart: prev.cart.map((item) =>
                      item.id === product.id
                        ? { ...item, isListed: !product.isListed }
                        : item,
                    ),
                  }));
                }}
                prod={product}
                key={index}
                id={index}
                reference={getData(product.id)}
                setTotal={setTotal}
              />
            ))}
          </div>
          <footer
            className="z-1 flex justify-between p-5 py-8 rounded-t-3xl"
            style={{ background: "#080" }}
          >
            <button>Buy Now</button>
            <div className="text-right leading-none">
              <p className="text-gray-300">Total</p>
              <p className="text-2xl font-bold text-white">
                ₱{total.toFixed(2)}
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
