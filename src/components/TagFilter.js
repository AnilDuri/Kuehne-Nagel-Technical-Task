import React, { useContext } from 'react'
import { ProductsContext } from '../store/productsContext';

export default function TagFilter({ label }) {
    const productCtx = useContext(ProductsContext);

    function handleOnChange(e) {
        const { checked } = e.target;

        if (checked) {
            productCtx.addFilterCategory(label);
            productCtx.filterCategories();
        } else {
            productCtx.removeFilterCategory(label);
        }
    }
    return (
        <label className="text-sm text-gray-500 flex items-center">
            <input
                type="checkbox"
                className="mr-2"
                onChange={handleOnChange}
            />
            {label}
        </label>
    )
}
