import React from "react";
import { Link } from "react-router-dom"



function Product(props) {
    return (
        props.products.map((product, idx) => {
            return (
                <div className="product" id={idx}>
                    <div className="product-box">
                        <img className="product-image" src={product.image} alt="black-t-shirt" />
                        <Link className="product-title-link" to={`/item/${product.link}`}><p className="product-title">{product.title}</p></Link>
                    </div>
                </div>
                
            )
        })
    )
}

export default Product