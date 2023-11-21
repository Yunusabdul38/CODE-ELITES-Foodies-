import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const heart = <FontAwesomeIcon icon={faHeart} style={{ color: "#ed1202" }} />;

function Footer() {
  return (
    <footer className="bg-slate-500 w-full bottom-0 relative p-8 pb-0">
      <div className="border-b-2 border-gray-400 flex flex-col sm:flex-row pb-3 sm:pb-0 justify-between items-start sm:items-center">
        <Link to="/" className="text-4xl font-takur font-medium">Foodies</Link>
        <ul className="flex justify-between items-start flex-col sm:flex-row sm:items-center w-1/2 capitalize text-base">
          <Link to="/">home</Link>
          <Link to="/AboutUs">About us</Link>
          <Link to="/Contact">contact</Link>
        </ul>
      </div>
      <p className="text-center">
        Made with <span>{heart}</span> by code Elite
      </p>
    </footer>
  );
}
export default Footer;
