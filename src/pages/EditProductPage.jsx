import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate, useParams } from "react-router"
import { updateProduct } from "../services/productService"

function EditProduct() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        price: 0,
        quantity: 0,
    })
    const { productId } = useParams()



    async function loadProduct() {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_SERVER_URL}/products/${productId}`)
        setFormData(response.data)
    }


    useEffect(() => {
        loadProduct()
    }, [])



    const navigate = useNavigate()

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        console.log('Form Submitted')

        const updatedProduct = await updateProduct(productId, formData)

        navigate('/products')
    }
    return (
        <div>
            <h1>Edit Product</h1>

            <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input 
            
            type="text" 
            title="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            />


            <label htmlFor="description">Description:</label>
            <input 
            type="text"
            title="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
             />
              <label htmlFor="category">Category:</label>
            <input 
            type="text"
            title="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
             />
             <label htmlFor="Price">Price:</label>
            <input 
            type="number"
            title="price"
            id="price"
            value={formData.price}
            onChange={handleChange}
             />
           <label htmlFor="quantity">Quantity:</label>
            <input 
            type="number"
            title="quantity"
            id="quantity"
            value={formData.quantity}
            onChange={handleChange}
             />

                <button>Create Product</button>
            </form>
        </div>
    )
}

export default EditProduct