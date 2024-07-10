import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider= (prop) =>{

    const  [cartItems,setCartItems] = useState({})
    const addCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }
    const getTotal = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems>0){
                let itemInfo = food_list.find((product)=>product._id===item)
                totalAmount = totalAmount + itemInfo.price * cartItems[item];
                
            }
        }
        return totalAmount;
    }
    
    const contextValue ={
            food_list,
            cartItems,
            setCartItems,
            addCart,
            removeCart,
            getTotal
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {prop.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;