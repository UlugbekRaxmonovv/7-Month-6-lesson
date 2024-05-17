import React from 'react';
import Home from './pages/Home/Home'
import LOGIN from './pages/Login/Login'
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Admin from './pages/Admin/Admin'
import ManageProduct from './pages/Admin/ManageProduct/ManageProduct'
import ManageUser from './pages/Admin/ManageUser/ManageUser'
import CreateUser from './pages/Admin/CreateUser/CreateUser'
import CreateProduct from './pages/Admin/CreatProduct/CreatProduct'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<LOGIN />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="manage" element={<ManageProduct />} />
          <Route path="manage-user" element={<ManageUser />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="create-product" element={<CreateProduct />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;

