import style from "./WhyUs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

const truck = <FontAwesomeIcon icon={faTruck} />;
const qualityIcon = <FontAwesomeIcon icon={faGear} />;
const record = <FontAwesomeIcon icon={faClipboard} />;

function WhyUs() {
  return (
    <section className={style["why-us"]}>
      <h1>
        <span>why</span> Foodies 
      </h1>
      <div className={style["content-box"]}>
        <div className={style.box}>
          <div>{record}</div>
          <h3>easy to order</h3>
        </div>
        <div className={style.box}>
          <div>{truck}</div>
          <h3>fast delivery</h3>
        </div>
        <div className={style.box}>
          <div>{qualityIcon}</div>
          <h3>best quality</h3>
        </div>
      </div>
    </section>
  );
}
export default WhyUs;
