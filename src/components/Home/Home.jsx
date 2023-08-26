import Header from "./Header"
import Testimony from "./Testimony"
import AboutUs from "./AboutUs"

function Home({handlePage}){
    return(
        <>
            <Header handlePage={handlePage}/>
            <AboutUs />
            <Testimony />
        </>
    )
}
export default Home