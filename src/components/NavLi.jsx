function NavLi({ value, handlePage, navbar, showMenuHandler}) {
  function navHandler() {
    if(value === "About Us")  return
    handlePage(value);
    showMenuHandler()
  }
  const currentPage = value === navbar
  return <li onClick={navHandler} className={currentPage?"trnslate-y-[-5px] ml-4 md:ml-0 text-white transition-all ease-linear p-[5px] w-full max-w-[100px] text-center rounded-md bg-[#393e46]":""}>
  {value}
</li>;
}
export default NavLi;
