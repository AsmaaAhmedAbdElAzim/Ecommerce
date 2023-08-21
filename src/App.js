
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import { createHashRouter } from 'react-router-dom';
import './App.css';
// import Footer from './Components/Utility/Footer';
// import NavbarLogin from './Components/Utility/NavbarLogin';
import AdminAddCatigoryPage from './Pages/Admin/AdminAddCatigoryPage';
import AdminAddPrandPage from './Pages/Admin/AdminAddPrandPage';
import AdminAddProductPage from './Pages/Admin/AdminAddProductPage';
import AdminAddSubCatigoryPage from './Pages/Admin/AdminAddSubCatigoryPage';
import AdminAllOrderPage from './Pages/Admin/AdminAllOrderPage';
import AdminAllProductPage from './Pages/Admin/AdminAllProductPage';
import AdminOrderDetalisPage from './Pages/Admin/AdminOrderDetalisPage';
import LoginPage from './Pages/Auth/LoginPage';
import RegisterPage from './Pages/Auth/RegisterPage';
import BrandPage from './Pages/Brand/BrandPage';
import CartPage from './Pages/Cart/CartPage';
import CatigoryPage from './Pages/Catigory/CatigoryPage';
import HomePage from './Pages/Home/HomePage';
import PaymentPage from './Pages/Payment/PaymentPage';
import ProductDetailesPage from './Pages/Product/ProductDetailesPage';
import ShopProductPage from './Pages/Product/ShopProductPage';
import UserAllOrderPage from './Pages/Users/UserAllOrderPage';
import UserFavouritProductPage from './Pages/Users/UserFavouritProductPage';
import Layout from './Components/Layout/Layout';

function App() {

  let x = createHashRouter([
   { path: "/",
    element: <Layout/>,
    children: [
      {index:true , element: <HomePage/>},
      {path:'login', element: <LoginPage/>},
      {path:'register', element:<RegisterPage/>},
      {path:'allbrand', element:<BrandPage/>},
      {path:'allcategory', element: <CatigoryPage/>},
      {path:'products', element:<ShopProductPage/>},
      {path:'products/:id', element:<ProductDetailesPage/>},
      {path:'cart', element: <CartPage/>},
      {path:'order/paymethoud', element:<PaymentPage/>},
      {path:'admin/allproducts', element:<AdminAllProductPage/>},
      {path:'admin/allorders', element:<AdminAllOrderPage/>},
      {path:'admin/orders/:id', element:<AdminOrderDetalisPage/>},
      {path:'admin/addbrand', element:<AdminAddPrandPage/>},
      {path:'admin/addcategory', element:<AdminAddCatigoryPage/>},
      {path:'admin/addsubcategory', element:<AdminAddSubCatigoryPage/>},
      {path:'admin/addproduct', element:<AdminAddProductPage/>},
      {path:'user/allorders' ,element:<UserAllOrderPage/>},
      {path:'user/favoriteproducts', element:<UserFavouritProductPage/>},
      
    ]
      }
  ])
  return <>

  <RouterProvider router={x}/>
    
    {/* <NavbarLogin/>
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/allbrand' element={<BrandPage/>}/>
      <Route path='/allcategory' element={<CatigoryPage/>}/>
      <Route path='/products' element={<ShopProductPage/>}/>
      <Route path='/products/:id' element={<ProductDetailesPage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/order/paymethoud' element={<PaymentPage/>}/>
      <Route path='/admin/allproducts' element={<AdminAllProductPage/>}/>
      <Route path='/admin/allorders' element={<AdminAllOrderPage/>}/>
      <Route path='/admin/orders/:id' element={<AdminOrderDetalisPage/>}/>
      <Route path='/admin/addbrand' element={<AdminAddPrandPage/>}/>
      <Route path='/admin/addcategory' element={<AdminAddCatigoryPage/>}/>
      <Route path='/admin/addsubcategory' element={<AdminAddSubCatigoryPage/>}/>
      <Route path='/admin/addproduct' element={<AdminAddProductPage/>}/>
      <Route path='/user/allorders' element={<UserAllOrderPage/>}/>
      <Route path='/user/favoriteproducts' element={<UserFavouritProductPage/>}/>

      
      

      
      
     
      
    </Routes>
    </BrowserRouter>
    <Footer/> */}
    </>
  
}

export default App;
