import {useContext} from 'react';
import {StoreContext} from '../ContextApi';

const CartPage = () => {
    const {state, dispatch} = useContext(StoreContext);

    const {cart, cartSubTotal, cartTax, cartTotal} = state;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <div className="grid grid-cols-1 gap-6">
                        {cart.map(item => (
                            <div
                                key={item.id}
                                className="p-4 border rounded-md shadow-md flex items-center justify-between"
                            >
                                <div className="flex items-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-20 h-20 object-cover rounded-md mr-4"
                                    />
                                    <div>
                                        <h2 className="font-bold">
                                            {item.title}
                                        </h2>
                                        <p className="text-gray-600">
                                            Price: ${item.price}
                                        </p>
                                        <p className="text-gray-600">
                                            Quantity: {item.quantity}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex space-x-2">
                                    <button
                                        onClick={() =>
                                            dispatch({
                                                type: "increment",
                                                payload: item.id,
                                            })
                                        }
                                        className="bg-blue-500 text-white px-3 py-1 rounded-md"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() =>
                                            dispatch({
                                                type: "decrement",
                                                payload: item.id,
                                            })
                                        }
                                        className="bg-red-500 text-white px-3 py-1 rounded-md"
                                    >
                                        -
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4">
                        <p className="text-gray-600">
                            Subtotal: ${cartSubTotal.toFixed(2)}
                        </p>
                        <p className="text-gray-600">
                            Tax: ${cartTax.toFixed(2)}
                        </p>
                        <p className="text-gray-600">
                            Total: ${cartTotal.toFixed(2)}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;