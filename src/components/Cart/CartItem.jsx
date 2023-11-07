export default function CartItem() {
  return (
    <div className="grid grid-cols-[2fr,1fr,1fr,1fr] border-b-2 border-gray-400 py-4 items-center">
      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
          alt="food"
          className="w-24 rounded-md"
        />
        <div>
          <p className="font-medium">Moi moi</p>
          <p className="font-light">moi moi with egg</p>
        </div>
      </div>
      <h3>$245</h3>
      <div className="bg-gray-500 w-fit text-gray-400 rounded-full">
        <button className="px-4">-</button>2<button className="px-4">+</button>
      </div>
      <h3>$797</h3>
    </div>
  );
}
