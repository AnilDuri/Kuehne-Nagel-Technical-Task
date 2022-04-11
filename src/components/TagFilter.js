import React from 'react'

export default function TagFilter({label}) {
    return (
        <label className="text-sm text-gray-500 flex items-center">
            <input
                type="checkbox"
                className="mr-2"
            />
            {label}
        </label>
    )
}
