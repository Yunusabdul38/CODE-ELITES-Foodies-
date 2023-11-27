import { Link } from "react-router-dom"
import PropTypes from "prop-types"
export default function Button({style,children,path}) {
  return (
    <Link to={path} className={`bg-gray-800 text-gray-100 hover:bg-gray-400 rounded hover:text-gray-800 py-1 w-fit ${style} border-2  transition border-[#393e46d2] capitalize`} >{children}</Link>
  )
}

Button.propTypes={
  children:PropTypes.string,
  style:PropTypes.string,
  path:PropTypes.string,
}