import { useEffect } from "react";
import Header from "./Header"
import Testimony from "./Testimony"
import AboutUs from "./AboutUs"

function Home(){
    useEffect(() => {
        document.title = "welcome to Foodies";
    
        return () => (document.title = "welcome to Foodies");
      });
    return(
        <>
            <Header/>
            <AboutUs />
            <Testimony />
        </>
    )
}
export default Home