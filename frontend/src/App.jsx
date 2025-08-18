

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import { Internships } from './components/Internships'
import Browse from './components/Browse'
import Profile from './components/Profile'
import InternshipDescription from './components/InternshipDescription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import { CompanySetup } from './components/admin/CompanySetup'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },   
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: "/internships",
    element:<Internships/>
    
  },
  {
    path: "/browse",
    element:<Browse/>
  },
  {
    path: "internships/description/:id",
    element:<InternshipDescription/>
  },
  {
    path: "/profile",
    element:<Profile/>
  },

  //Admin side starts from here

  {
    path:"/admin/companies",
    element:<Companies/>
  },
  {
    path:"/admin/companies/create",
    element:<CompanyCreate/>
  },
    {
    path:"/admin/companies/:id",
    element:<CompanySetup/>
  },



])
function App() {


  return (
    <div>
      <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default App
