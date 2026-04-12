import { useState, useEffect } from "react";

export default function ItemNoProductPage(props) {
  let [defQuantity, defSetQuantity] = useState(0);

  let quantity = props.quantity ?? defQuantity;
  let setQuantity = props.setQuantity ?? defSetQuantity;

  return (
    <div
      className={props.className}
      style={{
        width: 90,
        height: 90,
      }}
    >
      <div
        className={`${quantity > 0 ? "w-full h-full " : "w-0 h-0"} absolute top-1/2 left-1/2 -translate-1/2`}
      >
        {/* Long Hotdog Shape */}
        <div
          className="w-full rotate-45 h-full scale-x-35 scale-y-120 bg-red-500"
          style={{
            borderRadius: "50% / 15%",
            background: "var(--background4)",
          }}
        ></div>
        <img
          src="icons/add.svg"
          className={"cursor-pointer absolute right-12/100 top-12/100 w-18/100"}
          style={{ filter: "var(--invert)" }}
          onClick={() => {
            setQuantity(++quantity);
          }}
        />
        <img
          src={"icons/" + (quantity == 1 ? "delete" : "minus") + ".svg"}
          className="cursor-pointer absolute bottom-12/100 left-12/100 w-1/5"
          style={{ filter: "var(--invert)" }}
          onClick={() => {
            setQuantity(--quantity);
          }}
        />
      </div>
      {/* Main Center */}
      <p
        className={
          (quantity == 0 ? "cursor-pointer" : "") +
          " text-2xl flex justify-center items-center text-white absolute top-1/2 left-1/2 -translate-1/2 w-45/100 h-45/100"
        }
        style={{
          borderRadius: 100,
          background:
            quantity == 0 ? "var(--background1)" : "var(--background3)",
        }}
        onClick={() => {
          if (quantity == 0) setQuantity(++quantity);
        }}
      >
        {quantity > 0 ? (
          quantity
        ) : (
          <svg
            src="icons/add.svg"
            alt="Add item"
            className="w-1/2 h-1/2"
            style={{ filter: "invert(0.8)" }}
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 12 0 V 24 M 0 12 H 24"
              stroke={"var(--background2)"}
              strokeWidth="3"
            />
          </svg>
        )}
      </p>
    </div>
  );
}
