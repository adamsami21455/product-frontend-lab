
import { useParams, Link, useNavigate } from "react-router"
import { useState, useEffect } from "react"
import { getProductById, deleteProduct } from "../services/productService"

function ProductDetails() {
    const [product, setProduct] = useState(null)
    const { productId } = useParams()
    const navigate = useNavigate()

    async function loadProduct() {
        try {
            const response = await getProductById(productId)

            console.log("Product:", response)

            setProduct(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadProduct()
    }, [productId])

    async function handleDeleteProduct() {
        try {
            await deleteProduct(productId)
            navigate('/products')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Product Details</h1>

            {product ? (
                <>
                    <p>Title: {product.title}</p>
                    <p>Description: {product.description}</p>
                    <p>Category: {product.category}</p>
                    <p>Price: {product.price}</p>
                    <p>Quantity: {product.quantity}</p>

                    <Link to={`/products/${product._id}/edit`}>
                        Edit Product
                    </Link>

                    <button onClick={handleDeleteProduct}>
                        Delete Product
                    </button>
                </>
            ) : (
                <p>Product not found or not loaded</p>
            )}
        </div>
    )
}

export default ProductDetails
