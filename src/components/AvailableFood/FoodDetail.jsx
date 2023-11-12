import PropTypes from 'prop-types';
import style from "./FoodDetails.module.css";
import { CartContext } from "../../Authentication/CartAuthContext";
import { useContext } from "react";
function FoodDetails({ foodDetail }) {
  const { dispatchFn } = useContext(CartContext);
  const { name, price, image, description: detail,id } = foodDetail;
  const amount = `₦${price.toFixed(2)}`;
  function addcartHandler() {
    dispatchFn({
      type: "CART/Add",
      payLoad: {
        name,
        amount:price,
        image,
        description: detail,
        quality: 1,
        id
      },
    });
  }
  return (
    <div className={style.card}>
      <img src={image} alt={name} />
      <div>
        <h1>{name}</h1>
        <p>{detail}</p>
        <div className={style["card-btn"]}>
          <h2>{amount}</h2>
          <button onClick={addcartHandler}>add cart</button>
        </div>
      </div>
    </div>
  );
}

FoodDetails.propTypes={
  foodDetail:PropTypes.object
}

export default FoodDetails;
