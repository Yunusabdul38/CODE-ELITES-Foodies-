import { useEffect } from "react";
import Header from "./Header";
import Testimony from "./Testimony";
import AboutUs from "./AboutUs";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavBar";

function Home() {
  useEffect(() => {
    document.title = "welcome to Foodies";

    return () => (document.title = "welcome to Foodies");
  });
  return (
    <>
      <NavigationBar />
      <Header />
      <AboutUs />
      <Testimony />
      <Footer />
    </>
  );
}
export default Home;
