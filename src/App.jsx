import { useState } from 'react';
import NavigationBar from './components/NavBar';
import Footer from './components/Footer';
import Home from "./components/Home/Home"
import FoodList from "./Components/AvailableFood/FoodList";
import Contact from './components/contact/Contact';

function App() {
  const [page, setPage] = useState("home");
  function pageHandler(data) {
    setPage(data);
  }
  return (
    <>
      <NavigationBar handlePage={pageHandler} navbar={page}/>
      {page === "home" && <Home handlePage={pageHandler}/>}
      {page === "contact" && <Contact />}
      {page === "order" && <FoodList />}
      <Footer />
    </>
  )
}

export default App
