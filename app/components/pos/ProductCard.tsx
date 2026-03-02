"use client"

import { Product } from "@/app/types"
import { useCart } from "@/app/context/CartContext"

export default function ProductCard({ product }: { product: Product }) {
    const { addToCart } = useCart()
    return (
        <div className="border rounded-lg p-4 shadow hover:shadow-lg">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-500">Ksh {product.price}</p>
            <button 
            onClick={() => addToCart(product)}
            className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
            >
                Add
            </button>
        </div>
    )
}