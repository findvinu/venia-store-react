import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useApi";
import Product from "./Product";
import { ProductProps } from "../../model/product.model";


const Products: React.FC = () => {
    const [data, setData] = useState<ProductProps[]>([]);
    const { data: fetchData, loading, error } = useFetch<ProductProps[]>("GET", "/products");

    useEffect(() => {
        if (fetchData) {
            setData(fetchData)
        }
    }, [fetchData])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: { error }</p>

    if (!data) return <p>No data available</p>

    return (
        <section className="product-list">
            <div className="product-list__header">
                <div className="product-list__sort-container">
                    <div className="product-list__select-wrapper">
                        <select
                            name="sort"
                            title="sort"
                            id="sort"
                            className="product-list__sort"
                        >
                            <option value="price">Sort by Price</option>
                            <option value="category">Sort by Category</option>
                            <option value="range">Sort by Range</option>
                            <option value="availability">Sort by Availability</option>
                        </select>
                    </div>
                </div>
                <input
                    type="search"
                    id="search"
                    placeholder="Search..."
                    className="product-list__search"
                />
                <div className="mobile-filter">
                    <div className="mobile-filter__results">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            className="mobile-filter__results-icon"
                            aria-label="Filter Results"
                        >
                            <g id="sliders" transform="translate(0 -2)">
                                <line
                                    y1="6"
                                    transform="translate(3 13)"
                                    fill="none"
                                    stroke="#172026"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                />
                                <line
                                    y1="6"
                                    transform="translate(3 3)"
                                    fill="none"
                                    stroke="#172026"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                />
                                <line
                                    y1="8"
                                    transform="translate(9 11)"
                                    fill="none"
                                    stroke="#172026"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                />
                                <line
                                    y1="4"
                                    transform="translate(9 3)"
                                    fill="none"
                                    stroke="#172026"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                />
                                <line
                                    y1="4"
                                    transform="translate(15 15)"
                                    fill="none"
                                    stroke="#172026"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                />
                                <line
                                    y1="8"
                                    transform="translate(15 3)"
                                    fill="none"
                                    stroke="#172026"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                />
                                <line
                                    x2="4"
                                    transform="translate(1 12.778)"
                                    fill="none"
                                    stroke="#172026"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                />
                                <line
                                    x2="4"
                                    transform="translate(7 7.444)"
                                    fill="none"
                                    stroke="#172026"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                />
                                <line
                                    x2="4"
                                    transform="translate(13 14.556)"
                                    fill="none"
                                    stroke="#172026"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                />
                            </g>
                        </svg>
                        <span className="mobile-filter__results-text">Filter Results</span>
                    </div>
                    <div className="mobile-filter__sort">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label="Sort Products"
                        >
                            <path
                                d="M7 4V20M7 20L3 16M7 20L11 16M17 4V20M17 4L21 8M17 4L13 8"
                                stroke="#000000"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <span className="mobile-filter__sort-text">Sort Products</span>
                    </div>
                </div>
                <span className="product-list__result-count">0 Results</span>
            </div>
            <div id="product-list" className="product-list__grid">
                {
                    data.map(product => (
                        <Product key={ product.id } { ...product } />
                    )) }
            </div>
            <button type="button" id="load-more" className="load-more">
                Load More
            </button>
        </section>
    );
}

export default Products;