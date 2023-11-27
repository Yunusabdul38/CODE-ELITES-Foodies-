import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartAuthContext";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import NavigationBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function Cart() {
  const { cart } = useContext(CartContext);
  //page/document title
  useEffect(() => {
    document.title = "Foodies || Cart";

    return () => (document.title = "welcome to Foodies");
  });
  return (
   <section className="max-w-screen-2xl mx-auto">
    <NavigationBar/>
     <div className="md:h-screen p-7 bg-slate-200 text-slate-500">
      <h1 className="text-slate-700 capitalize text-xl font-semibold  text-center">
        your food cart
      </h1>
      {!cart.length && (
        <h3 className="underline underline-offset-1 capitalize text-xl font-medium text-center mt-20 mb-20">
          your cart is empty
        </h3>
      )}

      {cart.length !== 0 && (
        <section className="md:grid md:grid-cols-[2fr,1fr] md:gap-3 mt-5">
          <div className="max-h-[27rem]  sm:w-full overflow-y-scroll">
           <div className="w-[37rem] sm:w-full">
           <div className="grid grid-cols-[2fr,1fr,1fr,1fr] border-b-2 border-gray-400 capitalize pb-2">
              <h3>food</h3>
              <h3>price</h3>
              <h3>quality</h3>
              <h3>total</h3>
            </div>
            {cart.map((data) => {
              return (
                <CartItem
                  name={data.name}
                  key={data.id}
                  amount={data.amount}
                  image={data.image}
                  quality={data.quality}
                  id={data.id}
                />
              );
            })}
           </div>
          </div>
          <Checkout />
        </section>
      )}
    </div>
    <Footer/>
   </section>
  );
}
