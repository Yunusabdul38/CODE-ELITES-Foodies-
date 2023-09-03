import { useState } from "react";
import PropTypes from "prop-types"
import NavLi from "./NavLi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


const menuIcon = <FontAwesomeIcon icon={faBars} />;
const xIcon = <FontAwesomeIcon icon={faXmark} />;

const navlist =["home","About Us","contact","cart","bookmarked"]
function NavigationBar({handlePage,navbar}) {
  const [showMenu, setShowMenu] = useState(false);  
  function showMenuHandler(){
    setShowMenu(false)
  }
  return (
    <nav className={`py-0 px-8 bg-[#ffe227] z-10 fixed top-0 w-full flex justify-between flex-col md:flex-row items-start md:items-center pb-3 md:py-3 md:h-fit transition-all ease-linear ${showMenu?"h-2/5":"h-14"}`}>
      <h1 className="font-medium text-4xl font-[ 'cursive']">Foodies</h1>
      <ul className={`flex justify-between capitalize w-1/2 cursor-pointer text-xl flex-col md:flex-row pb-3 md:pb-0 ${!showMenu?"invisible md:visible md:flex":""}`}>
        {navlist.map((data,index)=> <NavLi value={data} handlePage={handlePage} navbar={navbar} key={index} showMenuHandler={showMenuHandler}/>)}
      </ul>
      <span className="absolute block top-[10px] text-2xl right-[30px] md:hidden" onClick={() => setShowMenu((prev) => !prev)}>
        {!showMenu ? menuIcon : xIcon}
      </span>
    </nav>
  );
}

NavigationBar.propTypes={
  handlePage:PropTypes.func.isRequired,
  navbar:PropTypes.string.isRequired
}
export default NavigationBar;