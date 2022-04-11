import React from 'react'
import TagChip from "./TagChip";

export default function ProductDetailsCard() {
  return (
    <div className="flex flex-col mt-36 py-6 bg-white shadow-sm rounded space-y-6">
      <p className="font-semibold px-4">Product Details</p>
      <hr />
      <div className="px-4 space-y-6">
        <p className="text-sm font-semibold">Product Name</p>
        <div className="flex space-x-2">
          <TagChip label={"PDF"} />
          <TagChip label={"Change"} />
        </div>
        <button className="bg-blue-400 px-2 py-1 text-white">Go To Manufacturer</button>
        <p className="text-sm font-light">Capture any process on your computer screen and quickly create visual instructions.
          Capture any process on your computer screen and quickly create visual instructions.
        </p>
        <div>
          <label className="flex items-center">
            <input className="mr-2 peer" type="radio" id="option" name="drone" value="option1" checked />
            <div className="text-sm font-semibold text-gray-400  peer-checked:text-black">Option 1</div></label>
          <p>
            <p className="text-sm font-light">Option Details</p>
          </p>
        </div>
        <div>
          <label className="flex items-center">
            <input className="mr-2 peer" type="radio" id="option" name="drone" value="option1" checked />
            <div className="text-sm font-semibold text-gray-400 peer-checked:text-black">Option 2</div></label>
          <p>
            <p className="text-sm font-light">Option Details</p>
          </p>
        </div>
      </div>
    </div>
  )
}
