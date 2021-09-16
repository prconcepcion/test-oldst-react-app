import DisplayProducts from "./DisplayProducts";
import useFetch from "./useFetch";

const Products = () => {
    const {products, loading, error} = useFetch("http://localhost:8000/products");
    return (  
        <div className="products">
            { loading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { products && <DisplayProducts products={products}/> }
        </div>
    );
}

export default Products;