import { useEffect, useState, useContext } from "react";
import Checkbox from "./Checkbox";
import { UserContext } from "../data/userdata";

export default function CartedProduct(props) {
  let [defQuantity, defSetQuantity] = useState(0);
  let quantity = props.quantity ?? defQuantity;
  let setQuantity = props.setQuantity ?? defSetQuantity;

  let [defCheck, defSetCheck] = useState(false);
  let check = props.check ?? defCheck;
  let setCheck = props.setCheck ?? defSetCheck;

  function sentenceCase(text) {
    return text
      ?.split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const cost = props.reference.price * props.prod.quantity;
  useEffect(() => {
    props.setTotal((prev) => prev + cost);
  }, []);

  return (
    <div
      key={props.id}
      className="my-6 rounded-xl shadow-md p-1 flex gap-1 pt-2"
      style={{ background: "var(--background2)" }}
    >
      <Checkbox
        className="self-center"
        check={check}
        setCheck={setCheck}
        color="var(--background1)"
      />
      <div className="h-14 aspect-square relative">
        <img
          className="select-none object-cover absolute top-1/2 -translate-y-1/2"
          src={"products/" + props.reference.name + ".png"}
        />
      </div>
      <div className="ml-2 text-sm flex-1">
        <p style={{ color: "var(--color1)" }}>
          {sentenceCase(props.reference.name)}
        </p>
        <p className="text-xs" style={{ color: "var(--color3)" }}>
          ₱{props.reference.price?.toFixed(2)}
        </p>
      </div>
      <div className="mr-2 flex flex-col gap-1.5">
        <div className="flex">
          <button
            className="cursor-pointer w-7.5 rounded-md aspect-square font-bold"
            style={{
              background: "var(--background1)",
              color: "var(--color1)",
            }}
            onClick={() => {
              setQuantity(quantity - 1);
            }}
          >
            –
          </button>
          <p
            className="flex w-11 font-bold text-sm justify-center items-center"
            style={{ color: "var(--color3)" }}
          >
            x{quantity}
          </p>
          <button
            className="cursor-pointer w-7.5 rounded-md aspect-square text-xl"
            style={{
              background: "var(--background1)",
              color: "var(--color1)",
            }}
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
        </div>
        <p
          className="text-right font-bold text-[1.1rem]"
          style={{ color: "var(--color1)" }}
        >
          ₱{(props.reference.price * props.prod.quantity)?.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
