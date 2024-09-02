import React from "react";
import { ProductProps } from "../../model/product.model";
import './products.scss';

const Product: React.FC<ProductProps> = ({ title, description, image, category, price, rating }) => {
    return (
        <div className="product-list__item">
            <h3 className="product-list__title">${ title }</h3>
            <div className="product-list__image-container">
                <img src={ image } alt={ title } className="product-list__image" />
            </div>
            <div className="product-list__footer">
                <span className="product-list__price">${ price }</span>
                <span className="product-list__category">{ category }</span>
            </div>
            <p className="product-list__description">{ description }</p>
            <div className="product-list__footer product-list__available">
                <div className="product-list__icon">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="product-list__icon-heart">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#1B252C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <span className="product-list__availability">Available: <span>${ rating?.count } in stock</span></span>
            </div>
        </div>
    );
}

export default Product;