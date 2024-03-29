import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import LoginAndRegisterPage from "./LoginAndRegisterPage";
import ProductPage from "./ProductPage";
import Admin from "./Admin";
import SingleProductPage from "./SingleProductPage";
import Cart from "./CartPage";
import Payment from "./Payment";
import PrivateRoute from "./PrivateRoute";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<HomePage />} />
      <Route path="/collection" element={<HomePage />} />
      <Route path="/blog" element={<HomePage />} />
      <Route path="/fashion" element={<HomePage />} />
      {/* <Route path="/product" element={<Product />} /> */}
      {/* <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      /> */}
       <Route path="/login" element={<LoginAndRegisterPage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/cart" element={
      <PrivateRoute>
      <Cart />
      </PrivateRoute>} />
      <Route path="/products" element={<ProductPage />} />
      <Route path='/payment' element={<Payment/>}/>
      <Route path="/product/:id" element={<SingleProductPage />} /> 
    </Routes>
  );
};

export default MainRoutes;
