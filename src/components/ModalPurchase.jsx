import { useEffect, useState } from "react";
import { date_format, money_format } from "../functions";
import CartLogo from "./CartLogo";

export default function ModalPurchase({ cost = 0, state }) {
  let [show, setShow] = useState(false);
  useEffect(() => {
    if (state[0]) {
      setTimeout(function () {
        document.body.style.overflow = "hidden";
      }, 500);
      setTimeout(function () {
        setShow(true);
      }, 640);
    } else {
      setShow(false);
      document.body.style.overflow = "";
    }
  }, [state[0]]);
  return (
    <div
      className={
        "text-lg flex fixed top-0 w-full h-full bg-black/35 z-3 " +
        (show ? "opacity-100" : "opacity-0 ") +
        (state[0] ? "block" : "hidden")
      }
      style={{ transition: "opacity 0.3s" }}
    >
      <div
        className="flex flex-col gap-4 rounded-lg w-80 mx-auto self-center p-6"
        style={{ background: "var(--background1)" }}
      >
        <CartLogo className="w-15 mx-auto filter-(--invert)" />
        <p
          className="border-b-1 pb-5 text-center text-xl"
          style={{ color: "var(--color1)" }}
        >
          Purchased Succesfully!
        </p>
        <div
          className="flex text-sm mx-auto gap-4 mb-2 mt-1 opacity-75"
          style={{ color: "var(--color1)" }}
        >
          <div>
            <p>COST</p>
            <p>DATETIME</p>
          </div>
          <div className="font-bold">
            <p>₱{money_format(cost)}</p>
            <p>{date_format(Date.now())}</p>
          </div>
        </div>
        <button
          onClick={() => {
            state[1](false);
          }}
          className="rounded-lg text-xl cursor-pointer flex-1 bg-[var(--background3)] text-white p-2 px-5 rounded"
        >
          Okay
        </button>
      </div>
    </div>
  );
}
