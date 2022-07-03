
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import { useEffect } from 'react';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import Book from './Pages/Dashboard/Book';
import BookingList from './Pages/Dashboard/BookingList';
import Review from './Pages/Dashboard/Review';


function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dashboard/:id' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route index element={<Book></Book>}></Route>
          <Route path='/dashboard/:id/bookList' element={<BookingList></BookingList>}></Route>
          <Route path='/dashboard/:id/book' element={<Book></Book>}></Route>
          <Route path='/dashboard/:id/review' element={<Review></Review>}></Route>
        </Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
