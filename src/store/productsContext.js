import { createContext, useReducer } from 'react'
import { Products } from '../data/Products';

const initialState = {
    products: Products,
    filteredProducts: Products,
    selectedProduct: null
}

export const ProductsContext = createContext({
    products: [],
    setSelectedProduct: ({ product }) => { }
});

function productsReducer(state, action) {
    switch (action.type) {
        case 'SET_SELECTED_PRODUCT':
            const updatedState = state;
            updatedState.selectedProduct = action.payload
            return updatedState;
        default:
            return state;
    }
}


function ProductsContextProvider({ children }) {
    const [productsState, dispatch] = useReducer(productsReducer, initialState);

    function setSelectedProduct(product) {
        dispatch({ type: 'SET_SELECTED_PRODUCT', payload: product })
        console.log('dispatch');
    }
    // function deleteExpense(id) {
    //     dispatch({ type: 'DELETE', payload: id })
    // }
    // function updateExpense(id, expenseData) {
    //     dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } })
    // }
    // function setExpenses(expenses) {
    //     dispatch({ type: 'SET', payload: expenses })
    // }

    const value = {
        products: productsState,
        setSelectedProduct: setSelectedProduct
    }

    return <ProductsContext.Provider value={value} >{children}</ProductsContext.Provider>
}

export default ProductsContextProvider