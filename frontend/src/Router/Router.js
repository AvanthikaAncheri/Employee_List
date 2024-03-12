import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Models/Header'
import Login from '../Models/Login'
import Home from '../Models/Home'
import EmployeePage from '../Models/EmployeePage'
import CreateEmployee from '../Models/CreateEmployee'
import EditPage from '../Models/EditPage'



const Router = () => {
  return (
    <BrowserRouter>
     <Header/>
     <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/view" element={<EmployeePage/>}></Route>
     <Route path="/create" element={<CreateEmployee/>}></Route>
     <Route path="/edit" element={<EditPage/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default Router