import image4 from "../Assets/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg";
import style from "./AboutUs.module.css";
import WhyUs from "./WhyUs";


function AboutUs() {
  return (
    <>
        <section className={style.AboutUs}>
      <h1>
        about <span>us</span>
      </h1>
      <div className={style.context}>
        <img src={image4} alt="nick-karvounis-Ciqxn7FE4vE-unsplash" />
        <aside>
          <p>
            At Foodies, we are dedicated to transforming your dining experience
            into a simple and convenient journey. Our mission is to make
            ordering your favorite meal incredibly fast and easy, with the added
            benefit of instant real-time feedback from partner restaurants.
          </p>
          <p>
            Real-time insights:Instant feedback and updates from participating restaurants ensure
            you are constantly informed about the status of your order. Delivery
            made easy: We took care of the details. Get an estimated delivery
            time and enjoy the delicious food to look forward to as it arrives
            at your doorstep. Our vision We envision a world where everyone can
            have amazing dining experiences, regardless of location or busy
            time. By bridging the gap between discerning foodies and fine
            dining, we aim to take your culinary journey to new heights.
          </p>
        </aside>
      </div>
    </section>
      <WhyUs />
    </>
  );
}
export default AboutUs;
