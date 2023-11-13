import PropTypes from "prop-types"
import { useContext } from "react";
import { CartContext } from "../../Authentication/CartAuthContext";
export default function CartItem({ name, image, quality, amount, id }) {
  //total amount for a particular food, food quality multiply by the food price 
  const total = quality * amount
  const { dispatchFn } = useContext(CartContext);
  function removeItemHandler() {
    dispatchFn({ type: "CART/REMOVE", payLoad: id });
  }
  function removeOneItemHandler() {
    dispatchFn({ type: "CART/AddOne", payLoad: id });
  }
  function addOneItemHandler() {
    dispatchFn({ type: "CART/RemoveOne", payLoad: id });
  }
  return (
    <div className="grid grid-cols-[2fr,1fr,1fr,1fr] border-b-2 border-gray-400 py-4 items-center relative">
      <div className="flex items-center gap-4">
        <img src={image} alt="food" className="w-24 h-28 rounded-md" />
        <div>
          <p className="font-medium">{name}</p>
        </div>
      </div>
      <h3>{`₦${amount.toFixed(2)}`}</h3>
      <div className="bg-gray-500 w-fit text-gray-400 rounded-full">
        <button className="px-4" onClick={addOneItemHandler}>
          -
        </button>
        {quality}
        <button className="px-4" onClick={removeOneItemHandler}>
          +
        </button>
      </div>
      <h3>{`₦${total.toFixed(2)}`}</h3>
      <button className="absolute right-6 rounded-[50%] p-1 bg-red-700 text-white" onClick={removeItemHandler}>X</button>
    </div>
  );
} 
CartItem.propTypes={
  name:PropTypes.string,
  image:PropTypes.string,
  quality:PropTypes.number,
  amount:PropTypes.number,
  id:PropTypes.number
}