import { createContext, useState } from "react";
import ProPTypes from "prop-types"
export const ModalContext = createContext({
    isOpen:false,
    image:"",
    detail:"",
    category:"",
    name:"",
    setIsOpen:()=>{}
})


function ModalAuthContext ({children}){
   const [{isOpen,category,detail,image,name},setIsOpen] = useState({isOpen:false,
    image:"",
    detail:"",
    category:"",
    name:"",})

    return <ModalContext.Provider value={{isOpen,setIsOpen,category,detail,image,name}}>{children}</ModalContext.Provider>
}

ModalAuthContext.propTypes ={
    children:ProPTypes.element
}
export default ModalAuthContext