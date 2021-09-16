import { useEffect, useState } from "react/cjs/react.development";
import DisplayProducts from "./DisplayProducts";
import useFetch from "./useFetch";

const Products = () => {
    const [sort, setSort] = useState("");
    const [pageNumber, setPageNumber] = useState(1)
    const [limit, setLimit] = useState(50);
    const {products, loading, error} = useFetch("http://localhost:8000/products?_page=" + pageNumber + "&_limit=" + limit +"&" + sort);
    const [isFetching, setIsFetching] = useState(false);
    const [endOfCatalogue, setEndOfCatalogue] = useState(false);

    const selectSort = (option) => {
        setSort(option)
    }

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        console.log("bottom")
        setIsFetching(true);
    }
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])


    useEffect(() => {
        if(!isFetching) return;
        let newPageNumber = pageNumber + 1;
        let newLimit = limit + 50;
        if(newLimit===500){
            setIsFetching(false);
            setEndOfCatalogue(true)
        }else{
            setLimit(newLimit);
            setIsFetching(false);
        }

        console.log("http://localhost:8000/products?_page=" + pageNumber + "&_limit=" + limit +"&" + sort)
    }, [isFetching, pageNumber])

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
            { loading && <div className="loading">Loading...</div> }
            { error && <div>{ error }</div> }
            { products && <DisplayProducts products={ products }/> }
            { endOfCatalogue && <div className="endMessage">END OF CATALOGUE</div>}
        </div>
    );
}

export default Products;