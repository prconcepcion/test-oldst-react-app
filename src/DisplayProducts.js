const DisplayProducts = ({products}) => {
    console.log(products)
    return (
        <div className="product-list">
            {products.map((product) => (
                <div className="product-details" key={ product.id }>
                    <h4>{product.face}</h4>
                </div>
            ))}
        </div>
    );
}
 
export default DisplayProducts;