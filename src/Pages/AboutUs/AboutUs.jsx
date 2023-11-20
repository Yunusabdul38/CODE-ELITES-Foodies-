import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
function AboutUs() {
  return (
    <>
      <NavBar />
      <section className="md:px-10 py-5 pt-0">
        <h1 className="hidden md:block text-3xl capitalize text-center mt-5 mb-3">
          about <span className="text-[#ffe227]">us</span>
        </h1>
        <div className="flex  justify-between md:flex-row-reverse flex-col items-start gap-5">
          <img
            src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
            alt="restaurant"
            className="w-full md:w-1/2 "
          />
          <aside className="text-xl text-left px-5 md:px-0  grid gap-8">
            <p>
              Here at Foodies, we are dedicated to transforming your dining
              experience into a simple and convenient journey. Our mission is to
              make ordering your favorite meal incredibly fast and easy, with
              the added benefit of instant real-time feedback from partner
              restaurants.
            </p>
            <p>
              Real-time insights:Instant feedback and updates from participating
              restaurants ensure you are constantly informed about the status of
              your order. Delivery made easy: We took care of the details. Get
              an estimated delivery time and enjoy the delicious food to look
              forward to as it arrives at your doorstep. Our vision We envision
              a world where everyone can have amazing dining experiences,
              regardless of location or busy time. By bridging the gap between
              discerning foodies and fine dining, we aim to take your culinary
              journey to new heights.
            </p>
            <p>click below to check our menu </p>
            <Button path="/menu" style="rounded px-4 bg-slate-700 hover:border-gray-300">view menu</Button>
          </aside>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default AboutUs;
