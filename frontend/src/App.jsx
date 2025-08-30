

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
import AdminInternships from './components/admin/AdminInternships';
import PostInternship from './components/admin/PostInternship'
import Applicants from './components/admin/Applicants'
import ProtectedRoute from './components/admin/ProtectedRoute'





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
    path: "/description/:id",
    element:<InternshipDescription/>
  },
  {
    path: "/profile",
    element:<Profile/>
  },

  //Admin side starts from here

  {
    path:"/admin/companies",
    element:<ProtectedRoute><Companies/></ProtectedRoute>
  },
  {
    path:"/admin/companies/create",
    element: <ProtectedRoute><CompanyCreate/></ProtectedRoute>
  },
  {
    path:"/admin/companies/:id",
    element: <ProtectedRoute><CompanySetup/></ProtectedRoute>
  },
  {
    path:"/admin/internships",
    element: <ProtectedRoute><AdminInternships/></ProtectedRoute>
  },
  {
    path:"/admin/internships/create",
    element: <ProtectedRoute><PostInternship/></ProtectedRoute>
  },
   {
    path:"/admin/internships/:id/applicants",
    element: <ProtectedRoute><Applicants/></ProtectedRoute>
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
