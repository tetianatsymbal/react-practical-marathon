import { useState } from 'react';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { selectUi } from '../../store/ui_slice';
import { useSelector } from 'react-redux';
import { selectCart } from '../../store/cart_slice';

const Cart = (props) => {
  const uiSlice = useSelector(selectUi);
  const cartSlice = useSelector(selectCart);
  return (
    uiSlice ? (
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartSlice.items.map((item) => {
            return <CartItem
              key={item.id}
              item={{ title: item.title, quantity: item.quantity, total: item.totalPrice, price: item.price, id: item.id }}
            /> 
           })}
        </ul>
        </Card>
    ) : null
  )

};

export default Cart;
