import { useState } from "react/cjs/react.development";
import DisplayProducts from "./DisplayProducts";
import useFetch from "./useFetch";

const Products = () => {
    const [sort, setSort] = useState("")

    const selectSort = (option) => {
        setSort(option)
    }

    const {products, loading, error} = useFetch("http://localhost:8000/products?" + sort);

    return ( 
        <div className="products">
            <header>
            <label>Sort By:</label>
            <select value={sort} onChange={(e) => selectSort(e.target.value)}>
                <option value="">---</option>
                <option value="_sort=price">Price</option>
                <option value="_sort=size">Size</option>
            </select>
            </header>
            { loading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { products && <DisplayProducts products={products}/> }
        </div>
    );
}

export default Products;