import dynamic from "next/dynamic";
import React, { memo, useState } from "react";
import { AddProductToWishlistProps } from "./AddProductToWishlist";
// import { AddProductToWishlist } from "./AddProductToWishlist";


const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
    return import("./AddProductToWishlist").then(mod => mod.AddProductToWishlist)
}, {
    loading: () => <span>Carregando...</span>
})
interface ProductItemProps {
    product: {
        id: number;
        price: number;
        title: string;
        priceFormatted: string;
    }
    onAddToWishList: (id: number) => void
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
    const [isAddList, setIsAddList] = useState(false);

    async function showFormattedDate() {
        const { format } = await import("date-fns")
        
        format()
    }
    return (
        <div>
            {product.title} - <strong>{product.price}</strong>
            <button onClick={() => setIsAddList(true)}>Adicionar aos Favoritos</button>

            {isAddList && (
                <AddProductToWishlist
                    onAddToWishlist={() => onAddToWishList(product.id)}
                    onRequestClose={() => setIsAddList(false)}
                />
            )}
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
}) 