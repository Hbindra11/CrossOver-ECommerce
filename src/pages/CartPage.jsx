import {useContext} from 'react';
import {StoreContext} from '../context/contextApi';

const CartPage = () => {
    const {state, dispatch} = useContext(StoreContext);

    const {cart, cartSubTotal, cartTax, cartTotal} = state;

    return (
        <div>
            
        </div>
    );
}

export default CartPage;