import { useState, useEffect } from "react";
import style from "./FoodList.module.css";
import FoodDetails from "./FoodDetail";
import FoodOptions from "./FoodOptions";
import { foodItemsData } from "./FoodData";

function FoodList() {
  const [foods, setFoods] = useState({ food: foodItemsData, optionValue: "" });
  //const [cart,setCart] = useState([])

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
  function optionsHandler(data) {
    setFoods((prev) => {
      return { ...prev, food: data.food, optionValue: data.name };
    });
  }
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
      console.log("yu");
      return setFoods({ food: foodItemsData, optionValue: "" });
    }
  }
  function addtocartHandler(data){
    setCart(prev => {
      return [...prev, data]
    })
  }
  return (
    <section className={style.foodList}>
      <div className={style.options}>
        <input
          type="text"
          placeholder="Search for food"
          onChange={searchHandler}
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
  );
}
export default FoodList;
