import style from "./NavBar.module.css"

function NavLi({ value, handlePage, navbar }) {
  function navHandler() {
    if(value === "About Us")  return
    handlePage(value);
  }
  const currentPage = value === navbar
  return <li onClick={navHandler} className={currentPage?style.active:""}>
  {value}
</li>;
}
export default NavLi;
