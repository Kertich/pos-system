"use client"

import { createContext, useContext, useState } from "react"
import { CartItem, Product } from "@/app/types"

interface CartContextType {
    cart: CartItem[]
    addToCart: (product: Product) => void
    removeFromCart: (id: string) => void
    increaseQty: (id: string) => void
    decreaseQty: (id: string) => void
    total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([])

    const addToCart = (product: Product) => {
        setCart(prev =>{
            const existing = prev.find(item => item.id === product.id)

            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
            }
            return [...prev, { ...product, quantity: 1 }]
        })
    }

    const removeFromCart = (id: string) => {
        setCart(prev => prev.filter(item => item.id !== id))
    }

    const increaseQty = (id: string) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
        )
    }

    const decreaseQty = (id: string) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter(item => item.quantity > 0)
        )
    }
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <CartContext.Provider
        value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty, total }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("useCart must be used within a CartProvider")
        return context
    }
    
}
