import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup/Signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'



function App() {

  let x =createBrowserRouter([
    {path:"" , element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:"signup",element:<Signup/>},
    ]}
  ])
  

  return (
    <>
     <RouterProvider router={x}>
      
     </RouterProvider>
    </>
  )
}

export default App
