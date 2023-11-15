import { Fragment, useEffect } from "react";
import NavigationBar from "../../components/NavBar";
import Footer from "../../components//Footer";

export default function AboutUs() {
  //Page/document title
  useEffect(() => {
    document.title = "About us";

    return () => (document.title = "welcome to Foodies");
  });
  return (
    <Fragment>
      <NavigationBar />
      <h1>AboutUs</h1>
      <Footer />
    </Fragment>
  );
}
