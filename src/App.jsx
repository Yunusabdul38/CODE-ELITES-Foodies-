import { Fragment} from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
    <Fragment>
      <NavigationBar />
      <Outlet />
      <Footer />
    </Fragment>
  )
}

export default App
