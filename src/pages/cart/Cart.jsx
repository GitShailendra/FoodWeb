import React, { useContext } from 'react'
import './cart.css';
import { StoreContext } from '../../context/StoreContext'
const Cart = () => {
  const {cartItems,food_list,removeCart,getTotal} = useContext(StoreContext);
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
                <div>
                  <div className="cart-items-title cart-item-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price*cartItems[item._id]}</p>
                  <p onClick={()=>removeCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
                </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotal()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>total</b>
              <b>{getTotal()+2}</b>
            </div>
            <hr />
          </div>
          <button>Proceed To Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Enter Promo Code Here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code..' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart