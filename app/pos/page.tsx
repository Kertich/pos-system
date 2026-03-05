import { products } from "../lib/mockData"
import ProductCard from "../components/pos/ProductCard"
import CartSummary from "../components/pos/CartSummary"
import { CartProvider } from "../context/CartContext"

export default function POSPage() {
    return (
        <CartProvider>
            <div className="grid grid-cols-3 min-h-screen">
                <div className="col-span-2 p-6 grid-cols-3 gap-4">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <CartSummary />
            </div>
        </CartProvider>
    )
}
