import React from 'react'
import TagChip from './TagChip'


export default function ProductDetail({ product }) {
    return (
        <div className="p-4 flex justify-between items-center bg-white shadow-sm rounded cursor-pointer">
            <div className="space-y-2">
                <p>{product.productName}</p>
                <div className="flex text-blue-500 space-x-1">{
                    product.tags.map((label) => {
                        return <TagChip label={label} />
                    })
                }
                </div>
            </div>
            <p className="ml-2 text-sm text-gray-400">Daily Business</p>
        </div>
    )
}
