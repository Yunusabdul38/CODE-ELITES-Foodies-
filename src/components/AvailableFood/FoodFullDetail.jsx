import { useContext } from "react";
import { ModalContext } from "../../Authentication/ModalAuthContext";

export default function FoodFullDetail() {
  const { setIsOpen,category,detail,image,name } = useContext(ModalContext);
  function exitModalHandler() {
    setIsOpen(false);
  }
  return (
    <div className="fixed z-10 bg-white h-fit  md:w-fit w-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-950 p-4 pt-12">
      <button
        className="uppercase absolute top-3 right-4 border-gray-300 border-2 p-1 rounded"
        onClick={exitModalHandler}
      >
        esc
      </button>
      <div className="md:flex gap-9 md:gap-2 mt-2">
        <img src={image} alt="" className="w-full md:w-1/2 md:h-56 rounded " />
        <div className="overflow-y-scroll h-72 flex flex-col md:gap-4">
          <h1 className="text-xl capitalize">{name}</h1>
          <h3 className="text-lg">{category}</h3>
          <p className="text-base">{detail}</p>
        </div>
      </div>
    </div>
  );
}