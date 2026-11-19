import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router"
import { getAllProducts } from "../services/productService"

function ProductList() {
    const [ products, setProducts ] = useState([])

    async function loadProducts(){
      try{
        const response = await getAllProducts()
        setProducts(response)
      } catch(err){
        SpeechSynthesisErrorEvent(err.response.data.message)
      }
    }

    useEffect(()=>{
        loadProducts()
    },[])
  return (
    <div>
        <h1>All Products</h1>

        {products.map((oneProduct)=>
        <div key={oneProduct._id}>
            <p>Title: {oneProduct.title}</p>
            <Link to={`/products/${oneProduct._id}`}>See Details</Link>
        </div>
        )}  
    </div>
  )
}

export default ProductList