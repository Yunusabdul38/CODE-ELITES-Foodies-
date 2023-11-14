import PropTypes from "prop-types";
import style from "./FoodDetails.module.css";
import { CartContext } from "../../Authentication/CartAuthContext";
import { useContext } from "react";
import { ModalContext } from "../../Authentication/ModalAuthContext";

function FoodDetails({ foodDetail }) {
  const { dispatchFn } = useContext(CartContext);
  const { name, price, image, description: detail, id, category } = foodDetail;
  const {setIsOpen} = useContext(ModalContext)
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
      <img src={image} alt={name} />
      <div>
        <h1>{name}</h1>
        <div>
          {details}...
          <button onClick={() => setIsOpen({
             image:image,
             detail:detail,
             category:category,
             name:name,
             isOpen:true
          })}>click for more deails</button>
        </div>
        <div className={style["card-btn"]}>
          <h2>{amount}</h2>
          <button onClick={addcartHandler}>add cart</button>
        </div>
      </div>
    </div>
  );
}

FoodDetails.propTypes = {
  foodDetail: PropTypes.object,
};

export default FoodDetails;
