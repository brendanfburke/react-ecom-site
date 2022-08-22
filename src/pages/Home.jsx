import React from "react";
import Product from "../components/Product";
import products from '../products.json'


function Home() {
    
    return (
        <div className="home" >
            <h1>T-Shirt Shop</h1>
            <Product products={products} />
        </div>
    )
}

export default Home