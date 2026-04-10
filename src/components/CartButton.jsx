import { useContext, useState, useEffect } from "react";
import { UserContext } from "../data/userdata";
import CartLogo from "./CartLogo";

export default function CartButton(props) {
  const { userData, setUserData } = useContext(UserContext);
  let [defQuantity, defSetQuantity] = useState(0);

  let quantity = props.quantity ?? defQuantity;
  let setQuantity = props.setQuantity ?? defSetQuantity;

  let [animation, setAnimation] = useState("");

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    let running = true;

    async function loop() {
      while (running) {
        await sleep(1500);
        setAnimation("seek");
        await sleep(1800); // duration of seek
        setAnimation("");
        await sleep(2000); // duration of seek
      }
    }

    loop();

    return () => {
      running = false; // cleanup on unmount
    };
  }, []);

  return (
    <div className={props.className}>
      <div
        className={
          " bg-(--background2)  cursor-pointer overflow-hidden shadow-lg aspect-square"
        }
        style={{ borderRadius: "100%" }}
        onClick={() => {
          setUserData({ ...userData, showCart: true });
          document.querySelector("body").style.overflow = "hidden";
        }}
      >
        <CartLogo
          animation={animation}
          setAnimation={setAnimation}
          className="w-full h-full p-[5%] filter-(--invert)"
        />
      </div>
      <p
        className={
          (quantity == 0 ? "scale-0" : "") +
          " text-lg lg:text-sm translate-x-[50%] -translate-y-[50%] absolute z-7 top-[10%] right-[10%] bg-red-500 w-[40%] lg:w-[50%] flex justify-center items-center text-white rounded-full aspect-square"
        }
      >
        {quantity}
      </p>
    </div>
  );
}
