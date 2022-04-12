import { createContext, useReducer } from 'react'

import { Products } from '../data/Products';

const initialState = {
    products: Products,
    filteredProducts: Products,
    selectedProduct: null,
    filteredCategories: []
}

export const ProductsContext = createContext({
    products: [],
    setSelectedProduct: ({ product }) => { }
});

function productsReducer(state, action) {
    switch (action.type) {
        case 'SET_SELECTED_PRODUCT':
            return { ...state, selectedProduct: action.payload };
        case 'FILTER_PRODUCTS':
            if (state.filteredCategories.length === 0) return { ...state, filteredProducts: Products }
            const filteredProductsList = state.products.filter(
                (product) => state.filteredCategories.includes(product.category));
            return {
                ...state,
                filteredProducts: filteredProductsList
            };
        case 'ADD_CATEGORY':
            const updatedFilterCategories = state.filteredCategories;
            updatedFilterCategories.push(action.payload);
            console.log(updatedFilterCategories)
            return { ...state, filteredCategories: updatedFilterCategories };
        case 'REMOVE_CATEGORY':
            const updatedCategories = state.filteredCategories;
            return { ...state, filteredCategories: updatedCategories.filter((category) => category !== action.payload) };
        default:
            return state;
    }
}


function ProductsContextProvider({ children }) {
    const [productsState, dispatch] = useReducer(productsReducer, initialState);

    function setSelectedProduct(product) {
        dispatch({ type: 'SET_SELECTED_PRODUCT', payload: product });
        console.log('dispatched')
    }
    function addFilterCategory(category) {
        dispatch({ type: 'ADD_CATEGORY', payload: category });
    }
    function removeFilterCategory(category) {
        dispatch({ type: 'REMOVE_CATEGORY', payload: category });
    }
    function filterCategories() {
        dispatch({ type: 'FILTER_PRODUCTS' });
        console.log(productsState)
    }

    const value = {
        products: productsState,
        setSelectedProduct: setSelectedProduct,
        addFilterCategory: addFilterCategory,
        removeFilterCategory: removeFilterCategory,
        filterCategories: filterCategories,
    }

    return <ProductsContext.Provider value={value} >{children}</ProductsContext.Provider>
}

export default ProductsContextProvider