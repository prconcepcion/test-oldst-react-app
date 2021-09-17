import Products from "./Products";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className='App'>
      <header>
        <Typography variant="h3" component="div" gutterBottom>
          EMOJI SHOP
        </Typography>
        {/* <p>But first, a word from our sponsors:</p>
        <img
          className='ad'
          src={`http://localhost:8000/ads/?r=${Math.floor(Math.random()*1000)}`}
          alt='ad'/> */}
      </header>
      <Products />
    </div>
  );
}

export default App;
