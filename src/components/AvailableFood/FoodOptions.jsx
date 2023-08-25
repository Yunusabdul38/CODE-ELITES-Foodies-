function FoodOptions({ options, food }) {
  function optionsHandler(e) {
    const foods = food.filter((value) => value.category === e.target.value);
    if (e.target.value === "All") {
      return options({food:food,name:""});
    }
    options({food:foods,name:e.target.value});
  }
  return (
    <select onChange={optionsHandler}>
      <option value="All">All</option>
      <option value="Beverages">Beverages</option>
      <option value="Seafood">Seafood</option>
      <option value="Appetizers">Appetizers</option>
      <option value="Pasta">Pasta</option>
      <option value="Soup">Soup</option>
      <option value="Salads">Salads</option>
      <option value="Pizzas">Pizzas</option>
      <option value="Sandwiches">Sandwiches</option>
      <option value="Main Dishes">Main Dishes</option>
      <option value="Snacks">Snacks</option>
    </select>
  );
}

export default FoodOptions;
