import {useEffect} from 'react'

export default function Cart() {
  useEffect(() => {
    document.title = "Foodies || Cart";

    return () => (document.title = "welcome to Foodies");
  });
  return (
    <div>Cart</div>
  )
}
