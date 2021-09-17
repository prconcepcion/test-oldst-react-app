import { useEffect, useState } from "react/cjs/react.development";
import DisplayProducts from "./DisplayProducts";
import useFetch from "./useFetch";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Products = () => {
    const [sort, setSort] = useState("");
    const [limit, setLimit] = useState(20);
    const {products, loading, error} = useFetch("http://localhost:8000/products?_page=" + 1 + "&_limit=" + limit +"&" + sort);
    const [isFetching, setIsFetching] = useState(false);
    const [endOfCatalogue, setEndOfCatalogue] = useState(false);

    const selectSort = (option) => {
        setSort(option)
        setLimit(20)
    }

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
            console.log("hello")
            return
        };
        console.log("bottom")
        setIsFetching(true);
    }
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])


    useEffect(() => {
        if(!isFetching) return;
        let newLimit = limit + 20;
        if(newLimit===500){
            setIsFetching(false);
            setEndOfCatalogue(true)
        }else{
            setLimit(newLimit);
            setIsFetching(false);
        }

    }, [isFetching])

    return ( 
        <div className="products">
            <div className="sortContainer">
                <FormControl sx={{ m: 1, minWidth: 150 }}>
                    <InputLabel id="demo-simple-select-helper-label">Sort by:</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={ sort }
                    label="Sort by"
                    onChange={(e) => selectSort(e.target.value)}
                    >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="_sort=price">Price</MenuItem>
                    <MenuItem value="_sort=size">Size</MenuItem>
                    </Select>
                </FormControl>
            </div>
            { loading && <div className="loading"><p>(O-O)</p></div> }
            { error && <div>{ error }</div> }
            { products && <DisplayProducts products={ products }/> }
            { endOfCatalogue && <div className="endMessage">~ END OF CATALOGUE ~</div>}
        </div>
    );
}

export default Products;