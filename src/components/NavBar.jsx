import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
// import NavLi from "./NavLi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


const menuIcon = <FontAwesomeIcon icon={faBars} />;
const xIcon = <FontAwesomeIcon icon={faXmark} />;

// const navlist =["home","About Us","contact","cart","bookmarked"]
function NavigationBar() {
  const [showMenu, setShowMenu] = useState(false);  
  const {pathname} =useLocation()
  return (
    <nav className={`py-0 px-8 bg-[#ffe227] z-10 sticky top-0 w-full flex justify-between flex-col md:flex-row items-start md:items-center pb-3 md:py-3 md:h-fit transition-all ease-linear ${showMenu?"h-2/5":"h-14"}`}>
      <h1 className="font-medium text-4xl font-[ 'cursive']">Foodies</h1>
      <ul className={`flex justify-between capitalize w-1/2 cursor-pointer text-xl flex-col md:flex-row pb-3 md:pb-0 ${!showMenu?"invisible md:visible md:flex":""}`} >
        <li className={`${pathname==="/"?"trnslate-y-[-5px] ml-4 md:ml-0 text-white transition-all ease-linear p-[5px] w-full max-w-[100px] text-center rounded-md bg-[#393e46]":""}`}><Link to="/">home</Link></li>
        <li className={`${pathname==="/AboutUs/"?"trnslate-y-[-5px] ml-4 md:ml-0 text-white transition-all ease-linear p-[5px] w-full max-w-[100px] text-center rounded-md bg-[#393e46]":""}`}><Link to="AboutUs/">about us</Link></li>
        <li className={`${pathname==="/Contact/"?"trnslate-y-[-5px] ml-4 md:ml-0 text-white transition-all ease-linear p-[5px] w-full max-w-[100px] text-center rounded-md bg-[#393e46]":""}`}><Link to="Contact/">contact</Link></li>
        <li className={`${pathname==="/Cart/"?"trnslate-y-[-5px] ml-4 md:ml-0 text-white transition-all ease-linear p-[5px] w-full max-w-[100px] text-center rounded-md bg-[#393e46]":""}`}><Link to="Cart/">cart</Link></li>
        <li className={`${pathname==="/Register/"?"trnslate-y-[-5px] ml-4 md:ml-0 text-white transition-all ease-linear p-[5px] w-full max-w-[100px] text-center rounded-md bg-[#393e46]":""}`}><Link to="Register/">join us</Link></li>
      </ul>
      <span className="absolute block top-[10px] text-2xl right-[30px] md:hidden" onClick={() => setShowMenu((prev) => !prev)}>
        {!showMenu ? menuIcon : xIcon}
      </span>
    </nav>
  );
}
export default NavigationBar;