import { ADD, REMOVE } from "./actionType"

const initState={
    cartItems:JSON.parse(localStorage.getItem("cart"))||[]
}

export  const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case ADD:{
            const cartItem=[...state.cartItems,payload]
            localStorage.setItem("cart",JSON.stringify(cartItem))
            return {
                ...state,cartItems:[...state.cartItems,payload]
            }
        }
        case REMOVE:{
            const cartItem=state.cartItems.filter((el)=>el._id!==payload._id)
            localStorage.setItem("cart",JSON.stringify(cartItem))
            return {
                ...state,cartItems:cartItem
            }

        }
        default:{
            return state
        }
    }
}