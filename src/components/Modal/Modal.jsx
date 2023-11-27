import { createPortal } from "react-dom";
import { useEffect, useContext } from "react";
import { ModalContext } from "../../context/ModalAuthContext";
import FoodFullDetail from "../../Pages/FoodList/FoodFullDetail";
function Backdrop() {
  const { setIsOpen } = useContext(ModalContext);
  return (
    <div
      className="z-0 bg-[#000000bf] h-screen top-0 fixed w-full"
      onClick={() => {
        setIsOpen(false);
      }}
    ></div>
  );
}

export default function Modal({ image, category, detail, name }) {
  const { setIsOpen } = useContext(ModalContext);
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    });
  }, [setIsOpen]);
  return createPortal(
    <>
      <Backdrop />
      <FoodFullDetail
        name={name}
        image={image}
        detail={detail}
        category={category}
      />
    </>,
    document.getElementById("modal")
  );
}
