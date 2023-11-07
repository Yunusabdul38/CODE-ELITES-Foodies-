import {useEffect} from 'react'
import CartItem from './CartItem';
import Checkout from './Checkout';
export default function Cart() {
  useEffect(() => {
    document.title = "Foodies || Cart";

    return () => (document.title = "welcome to Foodies");
  });
  return (
    <div className='p-7 bg-slate-200 text-slate-500 pad'>
      <h1 className='text-slate-700 capitalize text-xl font-semibold  text-center'>your food cart</h1>
      <section className='md:grid md:grid-cols-[2fr,1fr] md:gap-3 mt-5'>
        <div className='max-h-96 overflow-y-scroll'>
          <div className='grid grid-cols-[2fr,1fr,1fr,1fr] border-b-2 border-gray-400 capitalize pb-2'>
            <h3>product</h3>
            <h3>price</h3>
            <h3>quality</h3>
            <h3>total</h3>
          </div>
         <CartItem />
         <CartItem />
         <CartItem />
         {/* <CartItem />
         <CartItem /> */}
        </div>
        <Checkout/>
      </section>
    </div>
  )
}
