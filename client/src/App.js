import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

import useApplicationData from './hooks/useApplicationData';
import About from './pages/About/About';
import Account from './components/Account/Account';
import Home from './pages/HomePage/Home';
import Navbar from './Navbar';
import FarmerLogin from './pages/FarmerLogin/FarmerLogin';
import Landing from './pages/Landing/Landing';
import PastOrders from './pages/PastOrders/PastOrders';
import CartDrawer from './CartDrawer';
import FarmerHome from './farmers/FarmerHome';

function App() {

  const {
    state,
    setFarm,
    setBoxes,
    setCategory,
    setPrice,
    setCart,
    setProduct,
    setProducts,
    addToCart,
    setUser,
    setCartDrawer
  } = useApplicationData();

  return (
    <main className="App">
      <Router>
        <Routes>
          {/* Landing Page Route */}
          <Route path='/' element={<Landing />} />
          {/* Main Page Routes */}
          <Route path='/home' element={
            <>
              <Navbar
                setUser={setUser}
                users={state.users}
                user={state.user}
                showCart={state.cartDrawer}
                setCartDrawer={setCartDrawer}
              />
              <img src="/images/navbackground.jpg" className="sub_nav" alt="veggieline"></img>
              <Home
                state={state}
                setCartDrawer={setCartDrawer}
                setProduct={setProduct}
                setCategory={setCategory}
                setFarm={setFarm}
                addToCart={addToCart}
              />
            </>
          } />
          <Route path='/about' element={
            <>
              <Navbar
                setUser={setUser}
                users={state.users}
                user={state.user}
                showCart={state.cartDrawer}
                setCartDrawer={setCartDrawer}
              />
              <About />
            </>
          } />
          <Route path='/account' element={
            <>
              <Navbar
                setUser={setUser}
                users={state.users}
                user={state.user}
                showCart={state.cartDrawer}
                setCartDrawer={setCartDrawer}
              />
              <Account />
            </>
          } />
          <Route path='/orders' element={
            <>
              <Navbar
                setUser={setUser}
                users={state.users}
                user={state.user}
                showCart={state.cartDrawer}
                setCartDrawer={setCartDrawer}
              />
              <PastOrders />
            </>
          } />

          <Route path='/farmer-login' element={<FarmerLogin farms={state.farms} setUser={setUser} setFarm={setFarm} users={state.users}/>} />
          <Route path='/farmer-home' element={<FarmerHome
            state={state}
            setProduct={setProduct}
          />} />

        </Routes>
      </Router>
    </main>
  );
}

export default App;

