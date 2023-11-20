import { Link } from "react-router-dom"
import PropTypes from "prop-types"
export default function Button({style,children,path}) {
  return (
    <Link to={path} className={`w-fit ${style} border-2  transition border-[#393e46d2] capitalize`} >{children}</Link>
  )
}

Button.propTypes={
  children:PropTypes.string,
  style:PropTypes.string,
  path:PropTypes.string,
}
// .card-btn button {
//   background-color: #ffe227;
//   color: #393e46d2;
//   margin-top: 5px;
//   border-radius: 10px;
//   padding: 10px 15px;
//   text-transform: capitalize;
//   border: 2px solid #393e46d2;
//   transition: 100ms linear;
// }
// .card-btn button:hover {
//   background-color: #393e46d2;
//   color: #eeeeee;
//   border: 2px solid #ffe227;
//   transition: 100ms linear;
// }