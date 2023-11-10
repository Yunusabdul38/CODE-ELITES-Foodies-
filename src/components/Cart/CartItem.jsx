export default function CartItem({name,image,quality,amount}) {
  console.log(name)
  return (
    <div className="grid grid-cols-[2fr,1fr,1fr,1fr] border-b-2 border-gray-400 py-4 items-center">
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt="food"
          className="w-24 h-28 rounded-md"
        />
        <div>
          <p className="font-medium">{name}</p>
          {/* <p className="font-light">moi moi with egg</p> */}
        </div>
      </div>
      <h3>{amount}</h3>
      <div className="bg-gray-500 w-fit text-gray-400 rounded-full">
        <button className="px-4">-</button>{quality}<button className="px-4">+</button>
      </div>
      <h3>$797</h3>
    </div>
  );
}
