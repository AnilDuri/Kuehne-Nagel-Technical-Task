import React, { useContext } from 'react'

import { ProductsContext } from '../store/products-context'
import TagChip from "./TagChip";

export default function ProductDetailsCard() {

  const productCtx = useContext(ProductsContext);

  return (
    <div className="flex flex-col mt-36 py-6 bg-white shadow-sm rounded space-y-6">
      <p className="font-semibold px-4">Product Details</p>
      <hr />
      <div className="px-4 space-y-6">
        <p className="text-sm font-semibold">{productCtx.products.selectedProduct.productName}</p>
        <div className="flex align-center flex-wrap">
          {productCtx.products.selectedProduct.tags.map((label, index) => {
            return <TagChip key={index} label={label} />
          })}
        </div>
        <button className="bg-blue-400 px-2 py-1 text-white">Go To Manufacturer</button>
        <p className="text-sm font-light">
          {productCtx.products.selectedProduct.description.join('')}
        </p>
        <div className='space-y-1'>
          <label className="flex items-center">
            <input className="mr-2 peer" type="radio" id="option" name="drone" value="option1" defaultChecked />
            <div className="text-sm font-semibold text-gray-400  peer-checked:text-black">Option 1</div>
            </label>
          <p className="text-sm font-light">{productCtx.products.selectedProduct.option1}</p>
        </div>
        <div className='space-y-1'>
          <label className="flex items-center">
            <input className="mr-2 peer" type="radio" id="option" name="drone" value="option1" />
            <div className="text-sm font-semibold text-gray-400 peer-checked:text-black">Option 2</div>
            </label>
          <p className="text-sm font-light">{productCtx.products.selectedProduct.option2}</p>
        </div>
      </div>
    </div>
  )
}
