import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import style from "./Testimony.module.css";
import user1 from "../../Assets/user-1.jpg";
import user2 from "../../Assets/user-2.jpg";
import user3 from "../../Assets/user-3.jpg";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft}/>;
const arrowRight = <FontAwesomeIcon icon={faArrowRight}/>;

const testimonialData = [
  {
    id: 1,
    Image: user1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    Image: user2,
    name: "Jane Smith",
    text: "Vivamus feugiat odio eu semper. Sed nec ligula vel quam varius posuere.",
  },
  {
    id: 3,
    Image: user3,
    name: "Miyah Miles",
    text: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Accusantium 
        deleniti optio ullam nesciunt, numquam corporis et asperiores`,
  },
  {
    id: 4,
    Image: user2,
    name: "Aarav Lynn",
    text: ` Accusantium quas quisquam non? Quas voluptate nulla minima
        deleniti optio ullam nesciunt,
        id alias reiciendis, perferendis facere pariatur dolore veniam`,
  },
];

function Testimony() {
  const [activeIndex, setActiveIndex] = useState(0);
  function handleNext() {
    setActiveIndex(number=> number === 3? 0:number+1)
  }
  function handlePrev() {
    setActiveIndex(number => number===0?3:number-1)
  }
  return (
    <section className={style["testimonial-slider"]}>
      <h1>testimonials</h1>
      <p>what our clients says</p>
      <div className={style["testimonial-container"]}>
        <button onClick={handlePrev}>{arrowRight}</button>
        <div className={style.testimonial}>
          <img
            src={testimonialData[activeIndex].Image}
            alt={testimonialData[activeIndex].name}
          />
          <aside>
            <h2>
              {testimonialData[activeIndex].name}
            </h2>
            <p>
              {testimonialData[activeIndex].text}
            </p>
          </aside>
        </div>
        <button onClick={handleNext}>{arrowLeft}</button>
      </div>
    </section>
  );
}
export default Testimony;
