import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import RouteOne from './RouteOne'
import RouteTwo from './RouteTwo'
function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<RouteOne />}></Route>
        <Route path='/routetwo' element={<RouteTwo />}></Route>
      </Routes>

      
    </>
  )
}

export default App
