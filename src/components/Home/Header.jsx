import style from "./Header.module.css";

function Header({handlePage}) {
  function orderHanler(){
    handlePage("order")
  }
  return (
    <header className={style.header}>
      <section>
        <h1>Welcome to Foodies</h1>
        <p>
          Where flavor meets delight! Indulge
          your senses in a culinary journey like no other. Explore our exquisite
          menu, crafted with passion and finest ingredients. Whether it's a
          romantic dinner, a casual brunch, or a special celebration, we're here
          to create memorable moments for you. Join us and savor every bite in a
          warm and inviting ambiance. Your gastronomic adventure begins here.
        </p>
        <button onClick={orderHanler}>order now</button>
      </section>
    </header>
  );
}
export default Header;
