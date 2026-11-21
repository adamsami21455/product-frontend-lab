import { useState } from "react"
import { useNavigate } from "react-router"
import { createProduct } from "../services/productService"

function CreateProduct() {
    const [ formData, setFormData ] = useState({
        title:'',
        description: '',
        category:'',
        price: 0,
        quantity:0,
        
    })

    const navigate = useNavigate()

    function handleChange(event){
        setFormData({...formData, [event.target.title]:event.target.value})
    }

    async function handleSubmit(event){
        try {
        event.preventDefault()
        console.log('Form Submitted')
        
        const createdProduct = await createProduct(formData)

        navigate('/products')
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <h1>Create Product</h1>

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

export default CreateProduct