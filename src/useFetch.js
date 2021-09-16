import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
        .then(res => {
            if (!res.ok){
                throw Error("There was a problem in loading the products");
            }
            return res.json();
        }).then(data => {
            setProducts(data)
            setLoading(false)
        }).catch((err) => {
            setError(err.message);
            setLoading(false)
        });
    }, [url])

    return {products, loading, error}
}
 
export default useFetch;