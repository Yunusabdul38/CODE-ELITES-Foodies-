import style from "./FoodDetails.module.css";
function FoodDetails({foodDetail}) {
  const amount = `₦${price.toFixed(2)}`
  const {name,price,image,description:detail} = foodDetail
  function addcartHandler(){
    
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
