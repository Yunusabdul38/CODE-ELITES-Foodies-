import { useState,useContext } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../Authentication/CartAuthContext";

const carticon = <FontAwesomeIcon icon={faCartShopping} />;
const menuIcon = <FontAwesomeIcon icon={faBars} />;
const xIcon = <FontAwesomeIcon icon={faXmark} />;

function NavigationBar() {
  const {cart} = useContext(CartContext)
  const [showMenu, setShowMenu] = useState(false);  
  //total cart items
  const totalCart = cart.reduce((initial,cum)=> initial +cum.quality,0)
  const {pathname} =useLocation()

  return (
    <nav className={`py-0 px-8 bg-[#ffe227] z-10 sticky top-0 w-full flex justify-between flex-col md:flex-row items-start md:items-center pb-3 md:py-3 md:h-fit transition-all ease-linear ${showMenu?"h-2/5":"h-14"}`}>
      <Link to="/" className="font-medium text-4xl font-[ 'cursive']">Foodies</Link>
      <ul className={`flex justify-between capitalize w-1/2 cursor-pointer text-xl flex-col md:flex-row pb-3 md:pb-0 ${!showMenu?"invisible md:visible md:flex":""}`} >
        <li className={`${pathname==="/"?"trnslate-y-[-5px] ml-4 md:ml-0 text-white transition-all ease-linear p-[5px] w-full max-w-[100px] text-center rounded-md bg-[#393e46]":""}`}><Link to="/">home</Link></li>
        <li className={`${pathname==="/AboutUs"?"trnslate-y-[-5px] ml-4 md:ml-0 text-white transition-all ease-linear p-[5px] w-full max-w-[100px] text-center rounded-md bg-[#393e46]":""}`}><Link to="/AboutUs">about us</Link></li>
        <li className={`${pathname==="/Contact"?"trnslate-y-[-5px] ml-4 md:ml-0 text-white transition-all ease-linear p-[5px] w-full max-w-[100px] text-center rounded-md bg-[#393e46]":""}`}><Link to="/Contact">contact</Link></li>
        <li className={`relative ${pathname==="/Cart"?"trnslate-y-[-5px] ml-4 md:ml-0 text-white transition-all ease-linear p-[5px] w-full max-w-[100px] text-center rounded-md bg-[#393e46]":""}`}><Link to="/Cart">{carticon}<span className="bg-gray-500 absolute top-1 right-8 rounded-[50%] text-base px-1">{totalCart}</span> </Link></li>
        <li className={`${pathname==="/Register"?"trnslate-y-[-5px] ml-4 md:ml-0 text-white transition-all ease-linear p-[5px] w-full max-w-[100px] text-center rounded-md bg-[#393e46]":""}`}><Link to="/Register">join us</Link></li>
      </ul>
      <span className="absolute block top-[10px] text-2xl right-[30px] md:hidden" onClick={() => setShowMenu((prev) => !prev)}>
        {!showMenu ? menuIcon : xIcon}
      </span>
    </nav>
  );
}
export default NavigationBar;