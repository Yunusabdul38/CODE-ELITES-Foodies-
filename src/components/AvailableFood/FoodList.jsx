import { useState, useEffect, useContext } from "react";
import { ModalContext } from "../../Authentication/ModalAuthContext";
import Modal from "../Modal/Modal";
import style from "./FoodList.module.css";
import FoodDetails from "./FoodDetail";
import FoodOptions from "./FoodOptions";
import { foodItemsData } from "./FoodData";

function FoodList() {
  const {isOpen} = useContext(ModalContext)
  //available food data and optionValue for filter and searching through food item
  const [foods, setFoods] = useState({ food: foodItemsData, optionValue: "" });
  //document title
  useEffect(() => {
    document.title = "Foodies || available Foods";

    return () => (document.title = "welcome to Foodies");
  });

  let foodDetail = foods.food.map((data) => (
    <FoodDetails
      key={data.id}
      foodDetail={data}
      detail={data.description}
      price={data.price}
      image={data.image}
      
    />
  ));
  //handler for filtering/showing a food categories base on the user optionValue
  function optionsHandler(data) {
    setFoods((prev) => {
      return { ...prev, food: data.food, optionValue: data.name };
    });
  }
  //handler for searching/showing a food base on the user optionValue/search
  function searchHandler(e) {
    if (e.target.value.trim().length > 1) {
      const value = e.target.value;
      const toUpperCap = value.at(0).toLocaleUpperCase() + value.slice(1);
      const newData = foodItemsData.filter((value) =>
        value.name?.includes(toUpperCap)
      );
      setFoods((prev) => {
        return { ...prev, food: newData, optionValue: e.target.value };
      });
    }
    
    if (e.target.value.length === 0) {
      return setFoods({ food: foodItemsData, optionValue: "" });
    }
  }
  return (
    <>
    {isOpen && <Modal />}
     <section className={style.foodList}>
      <div className={style.options}>
        <input
          type="text"
          placeholder="Search for food"
          onChange={searchHandler}
         className="text-gray-700 pl-4" 
        />
        <FoodOptions options={optionsHandler} food={foodItemsData} />
      </div>
      {foods.food.length === 0 && (
        <p
          className={style.message}
        >{`${foods.optionValue} is currently not available`}</p>
      )}
      <div className={style["cart-cards"]}>{foodDetail}</div>
    </section>
    </>
  );
}
export default FoodList;
