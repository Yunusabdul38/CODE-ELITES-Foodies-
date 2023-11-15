import image4 from "../../Assets/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg";
import WhyUs from "./WhyUs";


function AboutUs() {
  return (
    <>
        <section className="py-0 px-[30px]">
      <h1 className="text-3xl capitalize text-center mt-5 mb-3">
        about <span className="text-[#ffe227]">us</span>
      </h1>
      <div className="block md:flex justify-between flex-row-reverse items-center gap-5 pr-5">
        <img src={image4} alt="nick-karvounis-Ciqxn7FE4vE-unsplash" className="md:w-2/5 md:rounded-[15px] w-1/2 mr-3 md:mr-0 md:float-none float-left"/>
        <aside className="text-2xl text-justify">
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
