import style from "./FoodDetails.module.css";
function FoodDetails({name,price,image,detail,addtocart}) {
  const amount = `₦${price.toFixed(2)}`

  function addcartHandler(){
    addtocart(name)
  }
  return (
    <div className={style.card}>
      <img src={image} alt={name} />
      <div>
        <h1>{name}</h1>
        <p>
          {detail} 
        </p>
        <div className={style["card-btn"]}>
            <h2>{amount}</h2>
            <button onClick={addcartHandler}>add cart</button>
        </div>    
      </div>
    </div>
  );
}


export default FoodDetails;
