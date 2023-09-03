import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const carticon = <FontAwesomeIcon icon={faCartShopping} />;
const bookmarkedIcon = <FontAwesomeIcon icon={faBookmark} />;
function NavLi({ value, handlePage, navbar, showMenuHandler}) {
  function navHandler() {
    if(value === "About Us")  return
    handlePage(value);
    showMenuHandler()
  }
  let list =value
  if(value==="cart"){
    list=carticon
  }
  if(value==="bookmarked"){
    list=bookmarkedIcon
  }
  const currentPage = value === navbar
  return <li onClick={navHandler} className={currentPage?"trnslate-y-[-5px] ml-4 md:ml-0 text-white transition-all ease-linear p-[5px] w-full max-w-[100px] text-center rounded-md bg-[#393e46]":""}>
  {list}
</li>;
}

NavLi.propTypes={
  value:PropTypes.string.isRequired,
  handlePage:PropTypes.func.isRequired,
  navbar:PropTypes.string.isRequired,
  showMenuHandler:PropTypes.func.isRequired
}
export default NavLi;
