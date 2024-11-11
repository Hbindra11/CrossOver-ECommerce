import {createContext, useReducer} from 'react';

const initailState = {
    products: [],
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
};

const storeReducer = (state, action) => {
    switch (action.type) {
        case "products":
            return {
                ...state,
                products: action.payload,
            };
        case "cart":
            return {
                ...state,
                cart: action.payload,
            };
        case "cartSubTotal":
            return {
                ...state,
                cartSubTotal: action.payload,
            };
        case "cartTax":
            return {
                ...state,
                cartTax: action.payload,
            };
        case "cartTotal":
            return {
                ...state,
                cartTotal: action.payload,
            };
        default:
            return state;
    }
};

export const StoreContext = createContext();

const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(storeReducer, initailState);

    return (
        <StoreContext.Provider value={{state, dispatch}}>
            {children}
        </StoreContext.Provider>
    );
}