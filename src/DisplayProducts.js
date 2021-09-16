import { useState, useEffect } from "react/cjs/react.development";
import useFetch from "./useFetch";

const DisplayProducts = ({products}) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dateFormat = (date) => {
        const productDate = new Date(date);
        const dateToday = new Date();
        const differenceTime = dateToday.getTime() - productDate.getTime();
        const minutes = 24 * 60 * 60 * 1000
        return Math.round(differenceTime / minutes)
    }

    const betterDate = (date) => {
        const newDate = new Date(date);
        return months[newDate.getMonth()] + " " + newDate.getDate() + ", " + newDate.getFullYear()
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <div className="product-details" key={ product.id }>
                    <div style={{ fontSize: product.size + 'px' }}>{ product.face }</div>
                    <h5>Size: { product.size }px</h5>
                    <h5>Price: ${ product.price / 100 }</h5>
                    { (dateFormat(product.date)) > 7 && <h5>Date added: { betterDate(product.date) }</h5> } 
                    { (dateFormat(product.date)) > 0 && (dateFormat(product.date)) <= 7 && <h5>Date added: {(dateFormat(product.date))} days ago</h5> } 
                    { (dateFormat(product.date)) == 0 && <h5>Date added: Today</h5> } 
                </div>
            ))}
        </div>
    );
}
 
export default DisplayProducts;