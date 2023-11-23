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
        <div className="gallary grid gap-2 grid-rows-2 grid-cols-3 overflow-hidden mx-auto w-1/2">
          <div className="hover:scale-110 transition-all duration-1000 rounded-md rounded-ss-none rounded-es-none overflow-hidden row-span-3 max-w-sm">
            <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D" />
          </div>
          <div className="rounded-md row-start-1 col-start-2  hover:scale-110 transition-all duration-1000 max-w-sm bg-red-300">
            <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZvb2R8ZW58MHx8MHx8fDA%3D" />
          </div>
          <div className="rounded-md hover:scale-110 transition-all duration-1000 col-start-2  max-w-sm">
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D" />
          </div>
          <div className="rounded-md rounded-ee-none rounded-se-none hover:scale-110 transition-all duration-1000 row-span-3 row-start-1 col-start-3 max-w-sm">
            <img src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZvb2R8ZW58MHx8MHx8fDA%3D" />
          </div>
        </div>
      </section>
      <WhyUs />
      <section className="w-full h-96 bg-hero-image1 md:bg-slate-800 md:bg-none bg-no-repeat bg-cover bg-right-top flex items-center justify-center text-center">
        <h2 className="font-NotoSans font-extrabold text-2xl md:text-4xl italic text-slate-300 md:text-slate-400 first-letter:uppercase">
          here at Foodies we care about giving you a{" "}
          <span className="bg-slate-700 text-slate-300 px-3 capitalize">
            quality
          </span>{" "}
          meal.
        </h2>
      </section>
      <Testimony />
      <Footer />
    </div>
  );
}
export default Home;
