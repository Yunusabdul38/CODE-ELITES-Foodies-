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
      <WhyUs/>
      <Testimony />
      <Footer />
    </div>
  );
}
export default Home;
