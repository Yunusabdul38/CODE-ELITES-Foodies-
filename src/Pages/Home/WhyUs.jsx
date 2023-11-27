
import { FaRegClipboard } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { ImLeaf } from "react-icons/im";

function WhyUs() {
  return (
    <section className="bg-slate-800 text-center px-7 md:pb-0 py-14">
      <h1 className="font-NotoSans text-slate-200 uppercase font-medium text-2xl">
        <span>why</span> Foodies 
      </h1>
      <p className="text-slate-300 text-base">over millions of people trust us to deliver good meals</p>
      <div className="flex justify-center gap-10 mt-5 flex-wrap ">
        <div className="text-slate-200 flex flex-col items-center w-56">
          <div className="text-slate-400 text-6xl md:text-7xl"><FaRegClipboard/></div>
          <h3 className="text-xl first-letter:uppercase">easy to order</h3>
          <p className="text-sm sm:text-base ">easy and smooth way to order your desire meal</p>
        </div>
        <div className="text-slate-200  text-6xl md:text-7xl flex flex-col items-center w-56">
          <div className="text-slate-400  text-6xl md:text-7xl"><TbTruckDelivery/></div>
          <h3 className="text-xl first-letter:uppercase">fast delivery</h3>
          <p className="text-sm sm:text-base ">we have delivery van for fast delivery</p>
        </div>
        <div className="text-slate-200 flex flex-col items-center w-56">
          <div className="text-slate-400  text-6xl md:text-7xl"><ImLeaf/></div>
          <h3 className="text-xl first-letter:uppercase">best quality</h3>
          <p className="text-sm sm:text-base ">we make sure you get quality meal to start or end your day</p>
        </div>
      </div>
    </section>
  );
}
export default WhyUs;
