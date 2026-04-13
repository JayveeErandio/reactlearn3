import { useEffect, useState, useContext } from "react";
import Checkbox from "./Checkbox";
import { sentence_case } from "../functions";

export default function CartedProduct(props) {
  let [defQuantity, defSetQuantity] = useState(0);
  let quantity = props.quantity ?? defQuantity;
  let setQuantity = props.setQuantity ?? defSetQuantity;

  let [defCheck, defSetCheck] = useState(false);
  let check = props.check ?? defCheck;
  let setCheck = props.setCheck ?? defSetCheck;

  let [revealProgress, setRevealProgress] = useState(0);

  let [move, setMove] = useState(false);

  const cost = props.reference.price * props.prod.quantity;
  useEffect(() => {
    props.setTotal((prev) => prev + cost);
  }, []);

  useEffect(() => {
    setRevealProgress(0);
    if (props.departure) {
      setRevealProgress(100);
      setTimeout(() => {
        setMove(true);
      }, 300);
    }
  }, [props.departure]);

  return (
    <div
      key={props.id}
      className={
        (move ? "departuring" : "") +
        " h-[74px] overflow-hidden relative mt-6 rounded-xl shadow-md p-1 flex gap-1 pt-2"
      }
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
          {sentence_case(props.reference.name)}
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
              if (quantity == 1) {
                props.showRemove();
                props.setMessageRemove(props.reference.name);
              } else setQuantity(quantity - 1);
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
      <div
        className={"overflow-hidden absolute h-full bg-red-500 top-0 left-0"}
        style={{ width: revealProgress + "%" }}
      >
        <img
          src="icons/removed.svg"
          className="invert relative top-1/2 -translate-y-1/2 h-1/2 left-1/2 w-[37px]"
        />
      </div>
    </div>
  );
}
