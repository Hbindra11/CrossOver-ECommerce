import {useContext, useEffect} from 'react';
import {StoreContext} from '../context/contextApi';

const CartPage = () => {
    const {state, dispatch} = useContext(StoreContext);

    const {cart, cartSubTotal, cartTax, cartTotal} = state;
    useEffect(() => {
        const subTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const tax = subTotal * 0.19;
        const total = subTotal + tax;
        dispatch({ type: "cartSubTotal", payload: subTotal });
        dispatch({ type: "cartTax", payload: tax });
        dispatch({ type: "cartTotal", payload: total });
    }, [cart]);
    const handleIncrement = (id) => {
        dispatch({ type: "cart", payload: id });
    };

    const handleDecrement = (id) => {
        dispatch({ type: "decrement", payload: id });
    };
    const handleRemove = (id) => {
        dispatch({ type: "remove", payload: id });
    };
    useEffect(() => {
        dispatch({ type: "cart", payload: [
            {
                id: 1,
                title: "Product 1",
                price: 10,
                description: "This is a product description",
                category: "Category 1",
                image: "https://via.placeholder.com/150",
                rating: { rate: 4, count: 10 },
                quantity: 1,
            },
            {
                id: 2,
                title: "Product 2",
                price: 20,
                description: "This is a product description",
                category: "Category 2",
                image: "https://via.placeholder.com/150",
                rating: { rate: 3, count: 10 },
                quantity: 1,
            },
        ] });
    }, []);

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
                                        onClick={() => handleIncrement(item.id)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded-md"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => handleDecrement(item.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded-md"
                                    >
                                        -
                                    </button>
                                    <button onClick={() => handleRemove(item.id)} className="btn-success text-white px-3 py-1 rounded-md">
                                        Remove
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