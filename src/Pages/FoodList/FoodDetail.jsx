import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import style from "./FoodDetails.module.css";
import { CartContext } from "../../context/CartAuthContext";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalAuthContext";

function FoodDetails({ foodDetail }) {
  const { dispatchFn } = useContext(CartContext);
  const { name, price, image, description: detail, id, category } = foodDetail;
  const { setIsOpen } = useContext(ModalContext);
  const amount = `₦${price.toFixed(2)}`;
  let details = detail.split(" ").splice(0, 9).join(" ");

  function addcartHandler() {
    dispatchFn({
      type: "CART/Add",
      payLoad: {
        name,
        amount: price,
        image,
        description: detail,
        quality: 1,
        id,
      },
    });
  }
  return (
    <div className={style.card}>
      <img src={image} alt={name} className="hover:scale-105 transition-all duration-100"/>
      <div>
        <h1>{name}</h1>
        <div>
          {details}...
          <Link
            onClick={() =>
              setIsOpen({
                image: image,
                detail: detail,
                category: category,
                name: name,
                isOpen: true,
              })
            }
            className="text-blue-950"
          >
            see more
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <h2>{amount}</h2>
          <button className="bg-slate-900 text-slate-400 mt-2 py-3 px-4 rounded-md transition-all ease-in duration-100 border-2 hover:bg-slate-700 hover:border-slate-900 " onClick={addcartHandler}>add cart</button>
        </div>
      </div>
    </div>
  );
}

FoodDetails.propTypes = {
  foodDetail: PropTypes.object,
};

export default FoodDetails;
