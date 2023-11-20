import { useState, useEffect } from "react";
const testimonialData = [
  {
    comment:"Best place fo a quality meal",
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore blanditiis sit doloribus iusto fugiat placeat, eaque nihil modi expedita sunt corporis id obcaecati facilis magni voluptatum accusantium sequi vitae? Fuga adipisci ipsum distinctio nemo",
    subTtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating:5    
  },
  {
    comment:"Fast delivery",
    name: "Jane Smith",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore blanditiis sit doloribus iusto fugiat placeat, eaque nihil modi expedita sunt corporis id obcaecati facilis magni voluptatum accusantium sequi vitae.",
    subText: "Vivamus feugiat odio eu semper. Sed nec ligula vel quam varius posuere.",
    rating:4
  },
  {
    comment:"Best place to order for a new almost everything",
    name: "Miyah Miles",
    text: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Accusantium 
        deleniti optio ullam nesciunt, numquam corporis et asperiores`,
    subText:"Accusantium deleniti optio ullam nesciunt, numquam corporis et asperiores",
    rating:4,
  },
  {
    comment:"Awesome customer services",
    name: "Aarav Lynn",
    text: ` Accusantium quas quisquam non? Quas voluptate nulla minima
        deleniti optio ullam nesciunt,
        id alias reiciendis, perferendis facere pariatur dolore veniam`,
       subText:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis non officia! Quod totam." ,
     rating:3,   
  },
  {
    comment:"Worth every penny",
    name: "yunus abdul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore blanditiis sit doloribus iusto fugiat placeat, eaque nihil modi expedita sunt corporis id obcaecati facilis magni voluptatum accusantium sequi vitae? Fuga adipisci ipsum distinctio nemo expedita sed explicabo atque, magnam sapiente reprehenderit vitae consequatur itaque molestiae fugit laborum cum et!",
    subText:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis non officia! Quod totam laboriosam, maxime iste ab reiciendis saepe.",
    rating: 5,
  },
];

function Testimony() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((cur) => cur + 1);
      if (current === 4) {
        setCurrent(0);
      }
    }, 10000);
    return () => clearInterval(intervalId);
  }, [current]);
  const {comment,name,rating,text,subText} = testimonialData[current]
  
  return (
    <section className="flex justify-center">
      <div className="w-4/5 bg-[#040D12] flex-wrap flex items-center">
        <img
          src="https://images.unsplash.com/photo-1613946069412-38f7f1ff0b65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
          alt="restaurant"
          className="md:block hidden w-1/2"
        />
        <aside className="grid gap-5 p-7 relative md:w-1/2">
          <h1 className="font-NotoSans capitalize text-xl font-semibold">
            testimonials
          </h1>
          <h2>{comment}</h2>
          <p>
           {text}
          </p>
          <p>
            {subText}
          </p>
          <p className="capitalize">
            {name}, <span>&times;&times;&times;&times;</span>
          </p>
          <div className="flex gap-1">
            <span
              onClick={()=>setCurrent(0)}
              className={`rounded-full w-3 h-3 ${
                current === 0 ? "bg-[#ffe227]" : "bg-[#ffffff4f]"
              }`}
            ></span>
            <span
            onClick={()=>setCurrent(1)}
              className={`rounded-full w-3 h-3 ${
                current === 1 ? "bg-[#ffe227]" : "bg-[#ffffff4f]"
              }`}
            ></span>
            <span
            onClick={()=>setCurrent(2)}
              className={`rounded-full w-3 h-3 ${
                current === 2 ? "bg-[#ffe227]" : "bg-[#ffffff4f]"
              }`}
            ></span>
            <span
            onClick={()=>setCurrent(3)}
              className={`rounded-full w-3 h-3 ${
                current === 3 ? "bg-[#ffe227]" : "bg-[#ffffff4f]"
              }`}
            ></span>
            <span
            onClick={()=>setCurrent(4)}
              className={`rounded-full w-3 h-3 ${
                current === 4 ? "bg-[#ffe227]" : "bg-[#ffffff4f]"
              }`}
            ></span>
          </div>
        </aside>
      </div>
    </section>
  );
}
export default Testimony;