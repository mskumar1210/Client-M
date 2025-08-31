import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Register from './pages/Register'
import Mybooking from './pages/Mybooking'
import Coursedetails from './pages/Coursedetails'
import AdminBookings from './pages/admin/AdminBookings'

function App() {
  return (
    <>
    <Header/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/course' element ={<Courses/>}/>
       <Route path='/login' element ={<Login/>}/>
       <Route path='/register' element ={<Register/>}/>
       <Route path='/mybooking' element ={<Mybooking/>}/>
       <Route path='/coursedetails/:id' element ={<Coursedetails/>}/>
       <Route path ='/admin/bookings' element ={<AdminBookings/>}/>
       
         
    </Routes>
       
    <Footer/>
    </>
  
  )
}

export default App