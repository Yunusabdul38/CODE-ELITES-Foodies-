import PropTypes from "prop-types"
export default function Balls({index,setCurrent,current}) {
  return (
    <span
      onClick={() => setCurrent(index)}
      className={`rounded-full w-3 h-3 ${
        current === index ? "bg-slate-300" : "bg-[#ffffff4f]"
      }`}
    ></span>
  );
}

Balls.propTypes={
    index:PropTypes.number,
    setCurrent:PropTypes.func,
    current:PropTypes.number
}