"use client"

import { useCart } from "@/app/context/CartContext"

export default function CartSummary() {
    const { cart, total, increaseQty, decreaseQty, removeFromCart } = useCart()

    return (
        <div className="border-1 p-4">
            <h2 className="text-xl font-bold mb-4">Cart </h2>

            {cart.map(item => (
                <div key={item.id} className="flex justify-between mb-3">
                    <div>
                        <p>{item.name}</p>
                    </div>

                    <div className="flex gap-2">
                        <button onClick={() => decreaseQty(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQty(item.id)}>+</button>
                        <button onClick={() => removeFromCart(item.id)}>x</button>
                    </div>
                </div>
            ))}

             <hr className="my-3" />

             <h3 className="font-bold">Total: Ksh {total}</h3>
        </div>
    )
}