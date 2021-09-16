import { useState } from "react/cjs/react.development";

const DisplayProducts = ({products}) => {

    const dateFormat = (date) => {
        const productDate = new Date(date);
        const dateToday = new Date();
        const differenceTime = dateToday.getTime() - productDate.getTime();
        const minutes = 24 * 60 * 60 * 1000
        return Math.round(differenceTime / minutes)
    }

    console.log(products)
    return (
        <div className="product-list">
            {products.map((product) => (
                <div className="product-details" key={ product.id }>
                    <div style={{ fontSize: product.size + 'px' }}>{ product.face }</div>
                    <h5>Size: { product.size }px</h5>
                    <h5>Price: ${ product.price / 100 }</h5>
                    { (dateFormat(product.date)) > 6 && <h5>{ product.date }</h5> } 
                    { (dateFormat(product.date)) <= 6 && <h5>{(dateFormat(product.date))} days ago</h5> } 
                </div>
            ))}
        </div>
    );
}
 
export default DisplayProducts;