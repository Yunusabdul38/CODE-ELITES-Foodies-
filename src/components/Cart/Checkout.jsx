export default function Checkout() {
  return (
    <aside className='h-fit md:mt-5 leading-8'>
    <div className='shadow-md  capitalize'>
    <h3 className='p-4 text-xl py-4 bg-gray-300'>order summary</h3>
     <div className='p-4' >
       <h4 className=''>subtotal <span className='float-right'>$244</span> </h4>
       <h4>transportation <span className='float-right'>$244</span> </h4>
       <h4>Add coupon code </h4>
     </div>
    <div className='bg-gray-300 flex justify-between p-4'>
     <h1>total</h1>  
     <h1>$235</h1>
   </div> 
    </div>
   <button className='hover:bg-[#393e46d2] mt-2 uppercase py-4 bg-gray-700 rounded-md text-slate-50 w-full '>checkout</button>
 </aside>
  )
}
