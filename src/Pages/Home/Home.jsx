import { useEffect } from "react";
import Header from "./Header";
import Testimony from "./Testimony";
import Footer from "../../components/Footer";
import WhyUs from "./WhyUs";
import NavigationBar from "../../components/NavBar";

function Home() {
  useEffect(() => {
    document.title = "welcome to Foodies";

    return () => (document.title = "welcome to Foodies");
  });
  return (
    <div className="bg-slate-300 max-w-screen-2xl mx-auto">
      <NavigationBar />
      <Header />
      <section className="text-slate-500">
        <h1 className="text-center first-letter:uppercase font-semibold text-2xl">
          gallery
        </h1>
        <div className="gallary grid gap-2 grid-rows-2 md:grid-cols-3 grid-cols-2 h-[550px]">
          <div className="hover:bg-center bg-left-bottom sm:bg-top hover:md:bg-right-bottom transition-all duration-1000 rounded-md rounded-ss-none rounded-es-none sm:row-span-3 bg-food-image2"></div>
          <div className="hover:bg-center bg-left-bottom sm:bg-top hover:md:bg-right-bottom rounded-md sm:row-start-1 sm:col-start-2 transition-all duration-1000 bg-food-image1"></div>
          <div className="hover:bg-center bg-left-bottom sm:bg-top rounded-md hover:md:bg-right-bottom transition-all duration-1000 sm:col-start-2 bg-food-image4"></div>
          <div className="hover:bg-center bg-left-bottom sm:bg-top sm:hidden block md:block hover:md:bg-right-bottom rounded-md rounded-ee-none rounded-se-none transition-all duration-1000 sm:row-span-3 sm:row-start-1 sm:col-start-3 bg-food-image3"></div>
        </div>
      </section>
      <WhyUs />
      <section className="w-full h-96 bg-hero-image1 md:bg-slate-800 md:bg-none bg-no-repeat bg-cover bg-right-top flex items-center justify-center text-center">
        <h2 className="font-NotoSans font-extrabold text-2xl md:text-4xl italic text-slate-300 md:text-slate-400 first-letter:uppercase">
          here at Foodies we care about giving you a{" "}
          <span className="bg-slate-700 text-slate-300 px-3 capitalize">
            quality
          </span>
          meal.
        </h2>
      </section>
      <Testimony />
      <Footer />
    </div>
  );
}
export default Home;