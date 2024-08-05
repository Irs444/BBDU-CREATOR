import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import Home from './components/main/Home'
import Login from './components/main/Login'
import Signup from './components/main/Signup'
import User from './components/user'
import Projects from './components/user/Projects'
import Admin from './components/admin'
import SideBar from './components/admin/SideBar'
import AddProject from './components/admin/AddProject'
import ManageProject from './components/admin/ManageProject'
import ManageStudent from './components/admin/ManageStudent'
import AdminProfile from './components/admin/AdminProfile'
import Contact from './components/main/Contact'
import UserProfile from './components/user/UserProfile'
import AdminAuth from './auth/AdminAuth'
import { UserProvider } from './context/UserContext'
import Detail from './components/user/Detail'
import About from './components/main/About'
import SubmitProject from './components/user/SubmitProject'
import Footer from './components/user/Footer'
import Main from './components/main'
import UserAuth from './auth/UserAuth'
import PageNotFound from './components/PageNotFound'



const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <SnackbarProvider autoHideDuration={1000}>

          <Routes>
            <Route path='/' element={<Navigate to={"main/home"} />} />

            <Route path='main' element={<Main />}>

              <Route path='home' element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<Signup />} />
              <Route path='contact' element={<Contact />} />
              <Route path='about' element={<About />} />

            </Route>

            <Route path='user' element={<UserAuth><User /></UserAuth>}>

              <Route path='project' element={<Projects />} />
              <Route path='footer' element={<Footer />} />
              <Route path='userprofile' element={<UserProfile />} />
              <Route path='detail/:id' element={<Detail />} />
              <Route path='submitproject' element={<SubmitProject />} />

            </Route>

            <Route path='admin' element={<AdminAuth><Admin /></AdminAuth>}>

              <Route path='sidebar' element={<SideBar />} />
              <Route path='addproject' element={<AddProject />} />
              <Route path='manageproject' element={<ManageProject />} />
              <Route path='managestudent' element={<ManageStudent />} />
              <Route path='adminprofile' element={<AdminProfile />} />

            </Route>

            <Route path='*' element={<PageNotFound/>}/>

          </Routes>
        </SnackbarProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App