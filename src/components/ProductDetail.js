import React from 'react'

import TagChip from './TagChip'

export default function ProductDetail({ product, showDetail, selectedProductTitle }) {

    let selected = '';
    if (selectedProductTitle === product.productName) {
        selected = 'border border-sky-400';
    }

    return (
        <div onClick={() => showDetail(product)} className={`${selected} p-4 flex justify-between items-center bg-white shadow-sm rounded cursor-pointer w-full`}>
            <div className="w-11/12">
                <p>{product.productName}</p>
                <div className="flex flex-wrap text-sky-400">{
                    product.tags.map((label, index) => {
                        return <TagChip key={index} label={label} />
                    })
                }
                </div>
            </div>
            <p className="w-1/12 text-sm text-gray-400">Daily Business</p>
        </div>
    )
}
