import { useParams, Link, useNavigate } from "react-router"
import { useState, useEffect } from "react"
import { getProductById } from "../services/productService"
import { deleteProduct } from "../services/productService"

function ProductDetails() {
    const [ product, setProduct ] = useState(null)
    const {productId} = useParams()

    async function loadProduct(){
        const response = await getProductById(productId)

        setProduct(response.data)
    }

    const navigate = useNavigate()

    async function handleDeleteProduct(){
        await deleteProduct(productIds)

        navigate('/products')
    }

    useEffect(()=>{
        loadProduct()
    },[])

  return (
    <div>
        <h1>Product Details</h1>

        {product ? <>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            

            <Link to={`/products/${product._id}/edit`}>Edit Product</Link>
            <button onClick={handleDeleteProduct}>Delete Product</button>
        </>: null}
    </div>
  )
}

export default ProductDetails