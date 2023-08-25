import Header from "./Header"
import Testimony from "./Testimony"
import WhyUs from "./WhyUs"

function Home({handlePage}){
    return(
        <>
            <Header handlePage={handlePage}/>
            <WhyUs />
            <Testimony />
        </>
    )
}
export default Home