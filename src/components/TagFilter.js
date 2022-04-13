import React, { useContext } from 'react'

import { ProductsContext } from '../store/products-context';

export default function TagFilter({ label }) {
    const productCtx = useContext(ProductsContext);

    function handleOnChange(e) {
        const { checked } = e.target;

        if (checked) {
            productCtx.addFilterCategory(label);
            productCtx.filterCategories();
        } else {
            productCtx.removeFilterCategory(label);
            productCtx.filterCategories();
        }
    }
    return (
        <label className="text-xs 2xl:text-sm text-gray-500 flex items-center">
            <input
                type="checkbox"
                className="mr-2 border-2 border-gray-200 font-medium"
                onChange={handleOnChange}
            />
            {label}
        </label>
    )
}
