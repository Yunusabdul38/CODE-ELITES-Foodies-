import {useEffect} from 'react'
import NavigationBar from '../NavBar';
import Footer from '../Footer';
export default function Form() {
  useEffect(() => {
    document.title = "Sign up";

    return () => (document.title = "welcome to Foodies");
  });
  return (
    <div className='bg-slate-300 max-w-screen-2xl mx-auto'>
      <NavigationBar/>
      <div className='h-screen'></div>
      <Footer/>  
    </div>
  )
}
