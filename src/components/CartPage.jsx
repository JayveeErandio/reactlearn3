import { useState, useContext } from "react";
import { UserContext } from "../data/userdata";

export default function CartPage() {
  const { userData, setUserData } = useContext(UserContext);

  return (
    <div className={userData.showCart ? "block" : "hidden"}>
      <div
        className={
          "fixed w-full h-full z-2 bg-black top-0 opacity-30 " +
          (userData.showCart ? "lg:block" : "")
        }
      ></div>
      <div
        className={"w-full lg:w-90 h-full fixed top-0 lg:top-0 lg:right-0 z-2"}
        style={{ background: "var(--background1)" }}
      >
        <div className="mt-12 mx-5 sm:w-110 sm:mx-auto lg:w-auto lg:mx-5">
          <header>
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
                  document.querySelector("body").style.overflow = "";
                }}
              />
            </div>
            <div
              className="text-sm p-2 shadow-md rounded-xl mt-6 flex"
              style={{
                background: "var(--background2)",
              }}
            >
              <div className="flex-1 border-r-1 border-gray-400 py-1">
                <div className="cursor-pointer flex gap-2 items-center w-max">
                  <svg className="w-6 h-6">
                    <rect
                      className="w-6 h-6"
                      rx="5"
                      ry="5"
                      fill="var(--background1)"
                    />
                  </svg>
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
          <div></div>
          <div></div>
          <div></div>
          <footer></footer>
        </div>
      </div>
    </div>
  );
}
