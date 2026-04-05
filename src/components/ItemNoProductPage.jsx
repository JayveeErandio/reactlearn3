import { useState } from "react";

export default function ItemNoProductPage() {
  let [quantity, setQuantity] = useState(0);

  return (
    <div
      className="relative"
      style={{
        width: 120,
        height: 120,
      }}
    >
      <div
        className={`${quantity > 0 ? "w-full h-full " : "w-0 h-0"} absolute top-1/2 left-1/2 -translate-1/2`}
      >
        <div
          className="w-full rotate-45 h-full scale-x-35 scale-y-125 bg-red-500"
          style={{
            borderRadius: "50% / 15%",
            background: "var(--background4)",
          }}
        ></div>
        <img
          src="icons/add.svg"
          className={"cursor-pointer absolute right-1/10 top-1/10 w-18/100"}
          style={{ filter: "var(--invert)" }}
          onClick={() => {
            setQuantity(++quantity);
          }}
        />
        <img
          src={"icons/" + (quantity == 1 ? "delete" : "minus") + ".svg"}
          className="cursor-pointer absolute bottom-1/10 left-1/10 w-1/5"
          style={{ filter: "var(--invert)" }}
          onClick={() => {
            setQuantity(--quantity);
          }}
        />
      </div>
      <p
        className="text-3xl flex justify-center items-center text-white absolute top-1/2 left-1/2 -translate-1/2 w-45/100 h-45/100"
        style={{
          borderRadius: 100,
          background: "var(--background3)",
        }}
      >
        {quantity > 0 ? (
          quantity
        ) : (
          <svg
            onClick={() => {
              setQuantity(++quantity);
            }}
            src="icons/add.svg"
            alt="Add item"
            className="w-1/2 h-1/2 cursor-pointer"
            style={{ fill: "white" }}
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 12 0 V 24 M 0 12 H 24" stroke="#fff" strokeWidth="3" />
          </svg>
        )}
      </p>
    </div>
  );
}
