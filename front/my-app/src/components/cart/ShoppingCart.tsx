'use client';

import { useState } from "react";

export const ShoppingCart = () => {
    const [countItems, setCountItems] = useState(0);

    return (

        <div className="cursor-pointer" onClick={() => setCountItems(countItems + 1)}>
            
            <span >{countItems}</span>
            
        </div>
    );



};