import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import Home from './components/user/Home'
import Login from './components/user/Login'
import Signup from './components/user/Signup'
import User from './components/user'
import Projects from './components/user/Projects'
import Admin from './components/admin'
import SideBar from './components/admin/SideBar'
import AddProject from './components/admin/AddProject'
import ManageProject from './components/admin/ManageProject'
import ManageStudent from './components/admin/ManageStudent'
import AdminProfile from './components/admin/AdminProfile'
import Contact from './components/user/Contact'
import AdminSignup from './components/user/AdminSignup'
import AdminLogin from './components/user/AdminLogin'
import UserProfile from './components/user/UserProfile'
import AdminAuth from './auth/AdminAuth'
import { UserProvider } from './context/UserContext'
import Detail from './components/user/Detail'
import About from './components/user/About'
import SubmitProject from './components/user/SubmitProject'


const App = () => {
  return (
    <BrowserRouter>
    <UserProvider>
      <SnackbarProvider>

        <Routes>
          <Route path='/' element={<Navigate to={"user/home"} />} />

          <Route path='user' element={<User />}>
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='project' element={<Projects />} />
            <Route path='contact' element={<Contact />} />
            <Route path='about' element={<About />} />
            <Route path='adminsignup' element={<AdminSignup />} />
            <Route path='adminlogin' element={<AdminLogin />} />
            <Route path='userprofile' element={<UserProfile />} />
            <Route path='detail/:id' element={<Detail/>} />
            <Route path='submitproject' element={<SubmitProject/>}/>
          </Route>

          <Route path='admin' element={<AdminAuth><Admin/></AdminAuth>}>
            <Route path='sidebar' element={<SideBar/>}/>
            <Route path='addproject' element={<AddProject/>}/>
            <Route path='manageproject' element={<ManageProject/>}/>
            <Route path='managestudent' element={<ManageStudent/>}/>
            <Route path='adminprofile' element={<AdminProfile/>}/>

          </Route>

        </Routes>
      </SnackbarProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App