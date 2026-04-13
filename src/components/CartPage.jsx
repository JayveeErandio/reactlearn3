import { useState, useContext, useEffect, use } from "react";
import { UserContext } from "../data/userdata";
import groceryData from "../data/products.js";
import CartedProduct from "./CartedProduct.jsx";
import Checkbox from "./Checkbox.jsx";
import ModalRemove from "./ModalRemove.jsx";
import { sentence_case } from "../functions.js";

export default function CartPage({ setPurchase, setCost }) {
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

  const [showRemove, setShowRemove] = useState(false);
  let [productRemove, setProductRemove] = useState("");
  let [listRemove, setListRemove] = useState([]);
  const [departuring, setDeparturing] = useState(false);

  useEffect(() => {
    if (userData.showCart) setShow(true);
    else {
      setTimeout(function () {
        setShow(false);
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

  function cartOut() {
    setUserData({
      ...userData,
      cart: userData.cart.filter((product) => {
        return !product.isListed;
      }),
      showCart: false,
    });
  }

  function getData(id) {
    for (let category of groceryData) {
      for (let product of category.products) {
        if (product.id == id) return product;
      }
    }
  }

  function verifySelection() {
    if (userData.cart.length == 0) return false;
    for (let product of userData.cart) if (!product.isListed) return false;
    return true;
  }

  return (
    <div className={show ? "block" : "hidden"}>
      <div
        onClick={() => {
          setUserData({ ...userData, showCart: false });
        }}
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
                  document.querySelector("body").style.overflow = "";
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
                <button
                  className={
                    "bg-rose-500 text-white px-3 rounded-md " +
                    (total == 0
                      ? "opacity-35 cursor-not-allowed"
                      : "cursor-pointer active:bg-rose-700 ")
                  }
                  onClick={() => {
                    if (total > 0) {
                      setListRemove([]);
                      let temp = [];
                      for (let product of userData.cart) {
                        if (product.isListed) temp.push(product.id);
                      }
                      setListRemove(temp);
                      setProductRemove(
                        temp.length > 1
                          ? temp.length + " items"
                          : sentence_case(getData(temp[0]).name),
                      );
                      setShowRemove(true);
                    }
                  }}
                >
                  Remove From Cart
                </button>
              </div>
            </div>
          </header>
          <div className="-my-6 pb-12 overflow-auto flex-1 py-6">
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
            {userData.cart.map((product, index) => {
              return (
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
                  key={product.id}
                  id={index}
                  reference={getData(product.id)}
                  setTotal={setTotal}
                  showRemove={() => {
                    setListRemove([product.id]);
                    setShowRemove(true);
                  }}
                  setMessageRemove={setProductRemove}
                  departure={(() => {
                    if (departuring) {
                      if (listRemove.find((value) => product.id == value)) {
                        //console.log(listRemove, product.id);
                        return "remove";
                      }
                    }
                  })()}
                />
              );
            })}
          </div>
          <footer
            className="z-1 flex justify-between p-5 py-8 rounded-t-3xl"
            style={{ background: "#080" }}
          >
            <button
              className={
                "ml-1 bg-white rounded-3xl p-3 px-9 " +
                (total == 0
                  ? "opacity-35 cursor-not-allowed"
                  : "cursor-pointer ")
              }
              onClick={() => {
                if (total > 0) {
                  setCost(total);
                  setPurchase(true);
                  cartOut();
                }
              }}
            >
              Buy Now
            </button>
            <div className="text-right leading-none">
              <p className="text-gray-300">Total</p>
              <p className="text-2xl font-bold text-white">
                ₱{total.toFixed(2)}
              </p>
            </div>
          </footer>
        </div>
      </div>

      <ModalRemove
        ids={listRemove}
        set={(list) => {
          setDeparturing(true);
          setTimeout(function () {
            setUserData({
              ...userData,
              cart: userData.cart.filter((product) => {
                return !list.find((ev) => ev == product.id);
              }),
            });
            setDeparturing(false);
          }, 1400);
        }}
        message={
          <>
            Remove{" "}
            {isNaN(productRemove[0]) ? (
              <strong>{sentence_case(productRemove)}</strong>
            ) : (
              <>
                {"the "}
                <strong>{productRemove}</strong>
              </>
            )}{" "}
            from your cart?
          </>
        }
        state={[showRemove, setShowRemove]}
      />
    </div>
  );
}
