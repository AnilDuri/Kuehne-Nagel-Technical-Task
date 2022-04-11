import React, { useState } from "react";

export default function ProfileTabs(props) {
    const [activeStatus] = useState(1);
    const active =
        "p-2 px-4 cursor-pointer border-b-2 border-blue-300 ease-in duration-150 text-xs xl:text-sm leading-none text-center text-blue-400";
    const inactive =
        "py-2 px-4 cursor-pointer border-b-2 border-gray-200  bg-transparent hover:bg-gray-100  ease-in duration-150 text-xs xl:text-sm leading-none text-gray-600";
    return (
        <div className="mx-auto container flex items-center justify-center w-full">
            <ul className="w-full flex justify-start items-center">
                <li
                    className={activeStatus === 1 ? active : inactive}
                >
                    1 Product
                </li>
                <li
                    className={activeStatus === 2 ? active : inactive}
                >
                    2 Addresses
                </li>
                <li
                    className={activeStatus === 5 ? active : inactive}
                >
                    3 Overview
                </li>
            </ul>
        </div>
    );
}
