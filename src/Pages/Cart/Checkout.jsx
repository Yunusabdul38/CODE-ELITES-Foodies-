import { useContext } from "react"
import { CartContext } from "../../Authentication/CartAuthContext"

export default function Checkout() {
  const {cart} = useContext(CartContext)
  //total amount of all food prices
  const subAmount = cart.reduce((initial,items)=>{
    return initial + (items.quality * items.amount)
  },0)
  //transportation price per each items
  const transportation =cart.length * 85.5034
  //total amount to pay before proceeding with to order
  const totalAmount = subAmount + transportation
  return (
    <aside className='h-fit md:mt-5 leading-8'>
    <div className='shadow-md  capitalize'>
    <h3 className='p-4 text-xl py-4 bg-gray-300'>order summary</h3>
     <div className='p-4' >
       <h4 className=''>subtotal <span className='float-right'>{`₦${subAmount.toFixed(2)}`}</span> </h4>
       <h4>transportation <span className='float-right'>{`₦${transportation.toFixed(2)}`}</span> </h4>
       <h4>Add coupon code </h4>
     </div>
    <div className='bg-gray-300 flex justify-between p-4'>
     <h1>total</h1>  
     <h1>{`₦${totalAmount.toFixed(2)}`}</h1>
   </div> 
    </div>
   <button className='hover:bg-[#393e46d2] mt-2 uppercase py-4 bg-gray-700 rounded-md text-slate-50 w-full '>order</button>
 </aside>
  )
}
