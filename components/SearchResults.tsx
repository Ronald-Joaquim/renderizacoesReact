import React, { useMemo } from "react"
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    totalPrice: number;
    results: Array<{
        id: number;
        price: number;
        priceFormatted: string;
        title: string;
    }>
    onAddToWishList: (id: number) => void;
}

export function SearchResults({ totalPrice, results, onAddToWishList }: SearchResultsProps) {

    return (
        <div>
            <h2>{totalPrice}</h2>

            {results.map(product => {
                return (
                    <ProductItem product={product} key={product.id}
                        onAddToWishList={onAddToWishList} />
                );
            })}
        </div>
    )
}