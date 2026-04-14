export default function SearchBar(args) {
  return (
    <div
      className={
        "h-max shadow-md flex items-center rounded-full px-3 bg-(--background2) " +
        args.className
      }
    >
      <img src="icons/search.svg" className="h-6 filter-(--invert)" />
      <input
        value={args.value}
        onChange={(e) => {
          args.set(e.target.value);
        }}
        placeholder="Search for eggs, soap, etc..."
        className="outline-none text-sm px-2 py-3 w-full text-(--color1)"
      />
      <img
        src="icons/cancel.svg"
        onClick={() => {
          args.set("");
        }}
        className={
          (args.value == "" ? "hidden" : "") +
          " cursor-pointer w-5 filter-(--invert)"
        }
      />
    </div>
  );
}
