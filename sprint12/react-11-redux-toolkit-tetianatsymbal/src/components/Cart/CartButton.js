import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions, selectUi } from "../../store/ui_slice"
import { selectCart } from '../../store/cart_slice';

const CartButton = (props) => {
  // const ui = useSelector(selectUi);
   const cartSlice = useSelector(selectCart);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(uiActions.toggle())} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartSlice.totalQuantity}</span>
    </button>
  );
};

export default CartButton;
