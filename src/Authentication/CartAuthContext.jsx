import { createContext, useReducer } from "react";

export const CartContext = createContext({
    cart:[],
    dispatchFn:()=>{}
})
const cartValue ={cart:[]}

function reducerFn(state,actions){

    if(actions.type === "CART/Add"){
        const index = state.cart.findIndex(data => data.id === actions.payLoad.id)
        //const findIndex = state.cart[index]
        if(index >=0){
           
            return {
                ...state,
                //cart:[...state.cart]

            }

        }
            return{
                ...state,
                cart:state.cart.concat(actions.payLoad),
                // cart:state.cart.push(actions.payLoad),
                // cart:[...state.cart,actions.payLoad]
            }       
    }
    if(actions.type === "CART/REMOVE"){
        const updatedItem = state.cart.filter(data =>data.id !== actions.payLoad)
        return{
            ...state,
            cart:[...updatedItem]
        }
    }
    return state
}

function CartAuthentication({children}){
    const [{cart},dispatchFn] = useReducer(reducerFn,cartValue)
    return <CartContext.Provider value={{cart,dispatchFn}}>{children}</CartContext.Provider>
}

export default CartAuthentication