import { useState, useEffect } from "react";
// import style from "./Header.module.css";
import { Link } from "react-router-dom";
function Header() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((cur) => cur + 1);
      if (current === 2) {
        setCurrent(0);
      }
    }, 10000);
    return () => clearInterval(intervalId);
  }, [current]);

  return (
    <div className="bg-slate-200 ">
      <header
        className={`bg-cover bg-no-repeat h-96 relative ${
          current === 0
            ? "bg-hero-image1 bg-center"
            : current == 1
            ? "bg-bottom bg-hero-image4"
            : "bg-hero-image5 sm:bg-center bg-right-top"
        }`}
      >
        <div className="absolute bottom-2 left-1/2 flex gap-1">
          <span
            className={`rounded-full w-3 h-3 ${
              current === 0 ? "bg-[#fff]" : "bg-[#ffffff4f]"
            } transition delay-700`}
          ></span>
          <span
            className={`rounded-full w-3 h-3 ${
              current === 1 ? "bg-[#fff]" : "bg-[#ffffff4f]"
            } transition delay-700`}
          ></span>
          <span
            className={`rounded-full w-3 h-3 ${
              current === 2 ? "bg-[#fff]" : "bg-[#ffffff4f]"
            } transition delay-700`}
          ></span>
        </div>
        <div className="bg-slate-700 w-0 animate-widths h-1"></div>
      </header>
      <section className="py-5 px-4 flex md:justify-evenly items-center flex-col justify-between md:flex-row gap-4 md:gap-0">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
          alt="food"
          className="rounded-full md:w-2/5 w-full"
        />
        <div className="text-slate-500 md:w-2/5 w-full">
        <h1 className="text-slate-700 text-xl">Welcome to Foodies</h1>
        <p>
          Where flavor meets delight! Indulge your senses in a culinary journey
          like no other. Explore our exquisite menu, crafted with passion and
          finest ingredients. Whether it's a romantic dinner, a casual brunch,
          or a special celebration, we`re here to create memorable moments for
          you. Join us and savor every bite in a warm and inviting ambiance.
          Your gastronomic adventure begins here.
        </p>
        <button className="mt-2 bg-gray-800 text-gray-100 hover:bg-gray-400 hover:text-gray-800 capitalize py-1 px-2 rounded-lg"><Link to="AvailableFood/" >order now</Link></button>
        </div>
      </section>
    </div>
  );
}

export default Header;
