import CartLogo from "./CartLogo";

export default function ModalRemove({ ids, set, message, state }) {
  return (
    <div
      className={
        "text-lg flex fixed top-0 w-full h-full bg-black/35 z-3 " +
        (state[0] ? "" : "hidden")
      }
    >
      <div
        className="flex flex-col gap-4 rounded-lg w-80 mx-auto self-center p-5"
        style={{ background: "var(--background1)" }}
      >
        <CartLogo className="w-15 mx-auto filter-(--invert)" />
        <p className="text-center mb-2" style={{ color: "var(--color1)" }}>
          {message ?? "Sure you want to remove?"}
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => {
              set(ids);
              state[1](false);
            }}
            className="cursor-pointer flex-1 bg-[#c44] text-white p-2 px-5 rounded"
          >
            Yes
          </button>
          <button
            className="cursor-pointer flex-1 p-2 px-5 rounded border-1"
            onClick={() => {
              state[1](false);
            }}
            style={{ color: "var(--color1)" }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
