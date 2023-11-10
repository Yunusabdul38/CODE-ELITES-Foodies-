import style from "./FoodDetails.module.css";
import { CartContext } from "../../Authentication/CartAuthContext";
import { useContext } from "react";
function FoodDetails({ foodDetail }) {
  const { cart, dispatchFn } = useContext(CartContext);
  const { name, price, image, description: detail,id } = foodDetail;
  const amount = `₦${price.toFixed(2)}`;
  function addcartHandler() {
    dispatchFn({
      type: "CART/Add",
      payLoad: {
        name,
        amount,
        image,
        description: detail,
        quality: 1,
        id
      },
    });
  }
  // console.log(foodDetail)
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

export default FoodDetails;
