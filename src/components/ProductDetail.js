import React from 'react'

import TagChip from './TagChip'

export default function ProductDetail({ product, showDetail, selectedProductTitle }) {

    let selected = '';
    if (selectedProductTitle === product.productName) {
        selected = 'border border-blue-500';
    }

    return (
        <div onClick={() => showDetail(product)} className={`${selected} p-4 flex justify-between items-center bg-white shadow-sm rounded cursor-pointer`}>
            <div className="">
                <p>{product.productName}</p>
                <div className="flex flex-wrap text-blue-500">{
                    product.tags.map((label, index) => {
                        return <TagChip key={index} label={label} />
                    })
                }
                </div>
            </div>
            <p className=" text-sm text-gray-400">Daily Business</p>
        </div>
    )
}
