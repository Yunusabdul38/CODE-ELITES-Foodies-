import { useEffect } from "react";
import Header from "./Header";
import Testimony from "./Testimony";
import Footer from "../../components/Footer";
import WhyUs from "./WhyUs"
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
        <h1 className="text-center first-letter:uppercase font-semibold text-2xl">dishes you may like</h1>
      </section>
      <WhyUs/>
      <section className="w-full h-96 bg-hero-image1 md:bg-slate-800 md:bg-none bg-no-repeat bg-cover bg-right-top flex items-center justify-center text-center">
          <h2 className="font-NotoSans font-extrabold text-2xl md:text-4xl italic text-slate-300 md:text-slate-400 first-letter:uppercase">here at Foodies we care about giving you a <span className="bg-slate-700 text-slate-300 px-3 capitalize">quality</span> meal.</h2>
      </section>
      <Testimony />
      <Footer />
    </div>
  );
}
export default Home;
