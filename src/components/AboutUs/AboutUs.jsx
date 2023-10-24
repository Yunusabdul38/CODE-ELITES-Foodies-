import { useEffect } from "react"
export default function AboutUs() {
    useEffect(() => {
        document.title = "About us";
    
        return () => (document.title = "welcome to Foodies");
      }); 
  return (
    <div>AboutUs</div>
  )
}
