import { Route, Routes } from "react-router"
import ProductDetails from "./pages/ProductDetailsPage"
import ProductList from "./pages/AllProductPage"
import Homepage from "./pages/Homepage"
import CreateProduct from "./pages/CreateProductPage"
import EditProduct from "./pages/EditProductPage"
import Navbar from "./components/Navbar"




function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path ="/" element={<Homepage/>} />
        <Route path ="/products" element={<ProductList/>} />
        <Route path ="/products/:productId" element={<ProductDetails/>} />
        <Route path ="/products/create" element={<CreateProduct/>} />
        <Route path ="/products/:productId/edit" element={<EditProduct/>} />
      </Routes>
    </div>
  )
}

export default App
